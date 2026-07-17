import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/api')) {
    return NextResponse.next();
  }

  if (path.startsWith('/admin')) {
    const session = request.cookies.get('session')?.value;

    if (path === '/admin/login') {
      return NextResponse.next();
    }

    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const payload = await decrypt(session);

      // Call internal API to check if user is still active (The Kill Switch)
      // We use a internal fetch because Prisma doesn't run in Edge runtime
      const checkRes = await fetch(`${request.nextUrl.origin}/api/auth/check-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: payload.userId })
      });

      if (!checkRes.ok) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }

      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
