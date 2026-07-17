import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { decrypt } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = await decrypt(session);
    // Allow both SUPER_ADMIN and ADMIN to access metadata for listing creation
    if (payload.role !== 'SUPER_ADMIN' && payload.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const [communities, agents] = await Promise.all([
      prisma.community.findMany({
        select: { id: true, name: true, slug: true },
        orderBy: { name: 'asc' },
      }),
      prisma.agent.findMany({
        where: { isActive: true },
        select: { id: true, fullName: true, slug: true },
        orderBy: { fullName: 'asc' },
      }),
    ]);

    return NextResponse.json({ communities, agents });
  } catch (error) {
    console.error('[GET_LISTING_METADATA]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
