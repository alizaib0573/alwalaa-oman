# Design Specification: Admin Authentication and Agent Management System

## Overview
This document specifies the migration from a hardcoded environment-based admin login to a database-backed, role-based access control (RBAC) system. It implements a Super Admin role with approval workflows for account creation and agent management, and migrates entity IDs from UUIDs to human-readable slugs.

## Goals
- Eliminate 4-5 minute login latency by optimizing authentication flow.
- implement secure password-based authentication stored in the database.
- Provide a Super Admin dashboard for account approval and "Kill Switch" access revocation.
- Enable tracking of agent performance (listing counts).
- Replace UUIDs with unique, human-readable slugs for Communities and Agents.

## 1. Data Model Changes

### User Model (New)
Handles identity and authentication.
- `id`: `String (UUID)` - Primary Key.
- `email`: `String` - Unique identifier for login.
- `passwordHash`: `String` - Bcrypt hashed password.
- `role`: `Enum (SUPER_ADMIN, ADMIN, AGENT)`.
- `status`: `Enum (PENDING, APPROVED, REJECTED)`.
- `isActive`: `Boolean` - Master toggle for account access.
- `createdAt`: `DateTime` - Default now.
- `updatedAt`: `DateTime` - Updated on change.

### Agent Model (Modified)
Handles agent profile and performance.
- `id`: `String` - Primary Key (Changed from UUID to human-readable slug).
- `userId`: `String (UUID)` - Foreign Key to `User.id` (Unique).
- `fullName`: `String`.
- `phone`: `String`.
- `bio`: `String?`.
- `avatarUrl`: `String?`.
- `properties`: Relation to `Property`.
- `createdAt`: `DateTime`.

### Community Model (Modified)
- `id`: `String` - Primary Key (Changed from UUID to human-readable slug).
- `slug`: `String` - (Redundant with ID, can be merged or kept for legacy; I propose using `id` as the slug).
- `name`: `String`.
- `description`: `String?`.
- `location`: `String`.
- `imageUrl`: `String?`.
- `featured`: `Boolean`.
- `metadata`: `Json?`.
- `properties`: Relation to `Property`.

### Property Model (Modified)
- Update `communityId` and `agentId` to `String` to match the new slug-based IDs.

## 2. Authentication & Authorization

### Login Flow
1.  **Request**: `/api/auth/login` receives email and password.
2.  **Lookup**: Query `User` table by email.
3.  **Verification**: 
    - Verify `passwordHash` using `bcryptjs`.
    - Check `status === 'APPROVED'`.
    - Check `isActive === true`.
4.  **Session**: Issue a JWT session cookie using `jose` containing `userId` and `role`.

### Access Control
- **Super Admin**: Full access to `/admin` and user management.
- **Admin**: Access to `/admin` for properties and communities.
- **Agent**: Access to a restricted dashboard to manage their own properties.
- **Global Kill-Switch**: `middleware.ts` checks the session's `userId` against `User.isActive`. If false, the user is redirected to login immediately.

## 3. Super Admin Dashboard Features

### Account Management
- **Pending Queue**: List all users where `status === 'PENDING'`. Actions: `Approve` or `Reject`.
- **Agent Directory**: List all agents with their `isActive` status and a count of linked properties.
- **Manual Creation**: Form to create new `User` and `Agent` records directly.

### Slug Generation
- Implement a utility to sanitize strings into slugs (e.g., "John Doe" $\rightarrow$ "john-doe").
- Enforce uniqueness at the database level and UI level.

## 4. Performance Optimizations
- **Database Indexing**: Create a unique index on `User.email` for $O(1)$ lookup.
- **Session Caching**: Use JWTs to avoid database hits for every request.
- **UI Responsiveness**: Use React Suspense and skeleton loaders in the Admin Panel.
