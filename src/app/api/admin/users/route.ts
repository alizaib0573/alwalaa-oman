import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { decrypt } from '@/lib/auth';
import { cookies } from 'next/headers';
import { generateSlug } from '@/lib/slugs';
import { randomUUID } from 'crypto';
import { Prisma } from '@prisma/client';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = await decrypt(session);
    if (payload.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ error: 'Forbidden: Super Admin only' }, { status: 403 });
    }

    const users = await prisma.user.findMany({
      include: {
        agent: {
          include: {
            _count: {
              select: { properties: true }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('[GET_USERS]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = await decrypt(session);
    if (payload.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ error: 'Forbidden: Super Admin only' }, { status: 403 });
    }

    const { email, password, fullName, phone, bio, role, status } = await request.json();

    if (!email || !password || !fullName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const bcrypt = require('bcryptjs');
    const passwordHash = await bcrypt.hash(password, 12);

    // Agent.id and Agent.slug have no DB default, so generate them here.
    // Suffix the slug with a short unique fragment to avoid slug collisions
    // when two agents share the same full name.
    const agentId = randomUUID();
    const slug = `${generateSlug(fullName)}-${agentId.slice(0, 8)}`;

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email,
          passwordHash,
          role: role || 'AGENT',
          status: status || 'PENDING',
          isActive: true,
        },
      });

      const agent = await tx.agent.create({
        data: {
          id: agentId,
          slug,
          userId: user.id,
          fullName,
          phone: phone || '',
          bio,
          isActive: true,
        },
      });

      return { user, agent };
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        const target = (error.meta?.target as string[])?.join(', ') ?? 'field';
        return NextResponse.json(
          { error: `A user with this ${target.includes('email') ? 'email' : target} already exists` },
          { status: 400 }
        );
      }
    }
    console.error('[CREATE_USER]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
