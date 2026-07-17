# Admin Authentication and Agent Management Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate from environment-based login to a database-backed RBAC system with a Super Admin approval workflow and slug-based entity IDs.

**Architecture:** Separation of `User` (Identity) from `Agent` (Profile). JWT-based sessions with a database-driven "Kill Switch" checked via middleware.

**Tech Stack:** Next.js, Prisma, PostgreSQL, `bcryptjs` for hashing, `jose` for JWTs.

## Global Constraints
- Login must be optimized to eliminate the current 4-5 minute delay.
- All `User` passwords must be hashed using `bcryptjs`.
- `Community` and `Agent` IDs must be unique, human-readable strings (slugs).
- Super Admin must be able to revoke access immediately via `isActive` flag.
- `Symmetry` between `User` status (`PENDING`, `APPROVED`, `REJECTED`) and the approval UI.

---

## Phase 1: Database Schema & Migration

### Task 1: Update Prisma Schema
**Files:**
- Modify: `prisma/schema.prisma`

**Interfaces:**
- Produces: New `User` model, modified `Agent`, `Community`, and `Property` models.

- [ ] **Step 1: Add `UserRole` and `UserStatus` enums**
```prisma
enum UserRole {
  SUPER_ADMIN
  ADMIN
  AGENT
}

enum UserStatus {
  PENDING
  APPROVED
  REJECTED
}
```

- [ ] **Step 2: Create `User` model**
```prisma
model User {
  id           String     @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  email        String     @unique
  passwordHash String
  role         UserRole   @default(AGENT)
  status       UserStatus @default(PENDING)
  isActive     Boolean    @default(true)
  agent        Agent?
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
  @@map("users")
}
```

- [ ] **Step 3: Modify `Agent` model**
- Change `id` to `String` (not `@db.Uuid`).
- Add `userId String @unique @db.Uuid` and relation `user User @relation(fields: [userId], references: [id])`.
- Remove `email` and `role` fields.

- [ ] **Step 4: Modify `Community` model**
- Change `id` to `String` (not `@db.Uuid`).
- Update `@@map("communities")`.

- [ ] **Step 5: Modify `Property` model**
- Change `communityId` to `String`.
- Change `agentId` to `String`.

- [ ] **Step 6: Run migration and commit**
```bash
npx prisma migrate dev --name migrate_to_rbac_and_slugs
git add prisma/schema.prisma
git commit -m "db: implement RBAC and slug-based IDs"
```

---

## Phase 2: Authentication Infrastructure

### Task 2: Password Hashing Utility
**Files:**
- Create: `src/lib/password.ts`

**Interfaces:**
- Produces: `hashPassword(password: string): Promise<string>`, `verifyPassword(password: string, hash: string): Promise<boolean>`

- [ ] **Step 1: Install bcryptjs**
```bash
npm install bcryptjs
npm install -D @types/bcryptjs
```

- [ ] **Step 2: Implement hashing and verification logic**
```typescript
import bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
```

- [ ] **Step 3: Commit**
```bash
git add src/lib/password.ts
git commit -m "lib: add password hashing utility"
```

### Task 3: Optimized Login API
**Files:**
- Modify: `src/app/api/auth/login/route.ts`
- Modify: `src/lib/auth.ts`

**Interfaces:**
- Consumes: `src/lib/password.ts`, `src/lib/prisma.ts`
- Produces: Secure JWT session with `userId` and `role`.

- [ ] **Step 1: Update `encrypt` payload to include `userId`**
Modify `src/lib/auth.ts` to accept `userId` and `role` in the payload.

- [ ] **Step 2: Rewrite `POST` handler in `/api/auth/login`**
```typescript
// 1. Fetch user from DB by email
const user = await prisma.user.findUnique({ where: { email } });
if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

// 2. Verify password
const isValid = await verifyPassword(password, user.passwordHash);
if (!isValid) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

// 3. Check status and isActive
if (user.status !== 'APPROVED' || !user.isActive) {
  return NextResponse.json({ error: 'Account is not active or pending approval' }, { status: 403 });
}

// 4. Generate session
const session = await encrypt({ userId: user.id, role: user.role });
// ... set cookie ...
```

- [ ] **Step 3: Test login with a seeded user**
Run: `curl -X POST -d '{"username":"test@email.com", "password":"password123"}' http://localhost:3000/api/auth/login`
Expected: 200 OK.

- [ ] **Step 4: Commit**
```bash
git add src/app/api/auth/login/route.ts src/lib/auth.ts
git commit -m "feat: migrate login to database-backed auth"
```

### Task 4: Global Kill-Switch Middleware
**Files:**
- Modify: `src/middleware.ts`

**Interfaces:**
- Consumes: `src/lib/auth.ts` (decrypt), `src/lib/prisma.ts`

- [ ] **Step 1: Implement session check in middleware**
```typescript
const session = await getSession();
if (session?.userId) {
  const user = await prisma.user.findUnique({ 
    where: { id: session.userId }, 
    select: { isActive: true } 
  });
  if (!user || !user.isActive) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}
```

- [ ] **Step 2: Commit**
```bash
git add src/middleware.ts
git commit -m "feat: implement global access kill-switch"
```

---

## Phase 3: Super Admin Backend (APIs)

### Task 5: User Management Endpoints
**Files:**
- Create: `src/app/api/admin/users/route.ts`
- Create: `src/app/api/admin/users/[id]/route.ts`

**Interfaces:**
- Produces: `GET /api/admin/users` (list all), `POST /api/admin/users` (create), `PATCH /api/admin/users/[id]` (update status/isActive).

- [ ] **Step 1: Implement GET `/api/admin/users`**
Fetch all users, including their status and role. Include a join with `Agent` to count `properties`.

- [ ] **Step 2: Implement PATCH `/api/admin/users/[id]`**
Update `status` (`APPROVED`, `REJECTED`) or `isActive` (`true`, `false`).

- [ ] **Step 3: Implement POST `/api/admin/users`**
Hash password and create `User` and `Agent` records in a transaction.

- [ ] **Step 4: Commit**
```bash
git add src/app/api/admin/users/
git commit -m "feat: add user management APIs for Super Admin"
```

---

## Phase 4: Super Admin Frontend

### Task 6: Approval Queue UI
**Files:**
- Modify: `src/app/admin/page.tsx`
- Create: `src/components/admin/ApprovalQueue.tsx`

**Interfaces:**
- Consumes: `GET /api/admin/users`

- [ ] **Step 1: Create `ApprovalQueue` component**
Display a table of users with `status === 'PENDING'`. Add "Approve" and "Reject" buttons that call the PATCH API.

- [ ] **Step 2: Integrate into `/admin` page**
Wrap in a Super Admin check: `if (session.role !== 'SUPER_ADMIN') return null;`

- [ ] **Step 3: Commit**
```bash
git add src/components/admin/ApprovalQueue.tsx src/app/admin/page.tsx
git commit -m "feat: add approval queue to admin dashboard"
```

### Task 7: Agent Directory & Performance UI
**Files:**
- Create: `src/components/admin/AgentDirectory.tsx`
- Modify: `src/app/admin/page.tsx`

**Interfaces:**
- Consumes: `GET /api/admin/users`, `PATCH /api/admin/users/[id]`

- [ ] **Step 1: Create `AgentDirectory` component**
Table displaying all Agents, their property count, and an `isActive` toggle switch.

- [ ] **Step 2: Integrate into `/admin` page`**

- [ ] **Step 3: Commit**
```bash
git add src/components/admin/AgentDirectory.tsx
git commit -m "feat: add agent directory with performance tracking"
```

---

## Phase 5: Slugs Implementation

### Task 8: Slug Utility & Data Migration
**Files:**
- Create: `src/lib/slugs.ts`
- Create: `prisma/seed-slugs.ts` (one-time migration script)

**Interfaces:**
- Produces: `generateSlug(text: string): string`

- [ ] **Step 1: Implement `generateSlug` utility**
```typescript
export function generateSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
```

- [ ] **Step 2: Create migration script**
Script that iterates through existing `Community` and `Agent` UUIDs and assigns them slugs based on name/fullName.

- [ ] **Step 3: Run migration**
`npx ts-node prisma/seed-slugs.ts`

- [ ] **Step 4: Commit**
```bash
git add src/lib/slugs.ts prisma/seed-slugs.ts
git commit -m "feat: implement human-readable slugs for agents and communities"
```
