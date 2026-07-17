import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { decrypt } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    // For middleware checks, userId is passed in body
    // For client-side checks, we rely on the session cookie
    const body = await request.json().catch(() => ({}));
    let userId = body.userId;

    if (!userId) {
      const cookieStore = await cookies();
      const sessionCookie = cookieStore.get('session')?.value;
      if (sessionCookie) {
        const decrypted = await decrypt(sessionCookie);
        userId = decrypted.userId;
      }
    }

    if (!userId) {
      return NextResponse.json({ error: 'UserId required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { isActive: true, role: true }
    });

    if (!user || !user.isActive) {
      return NextResponse.json({ active: false }, { status: 403 });
    }

    return NextResponse.json({
      active: true,
      session: { userId, role: user.role }
    });
  } catch (error) {
    console.error('[CHECK_SESSION]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
