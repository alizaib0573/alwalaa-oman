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
    if (payload.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const [userCount, propertyCount, communityCount] = await Promise.all([
      prisma.user.count(),
      prisma.property.count(),
      prisma.community.count(),
    ]);

    return NextResponse.json({
      agents: userCount,
      properties: propertyCount,
      communities: communityCount,
      health: '99.9%', // Static for now as we don't have a real health check
    });
  } catch (error) {
    console.error('[GET_ADMIN_STATS]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
