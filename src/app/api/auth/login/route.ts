import { NextResponse } from 'next/server';
import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'luxury2026';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const session = await encrypt({ username, role: 'ADMIN' });

      const cookieStore = await cookies();
      cookieStore.set('session', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('[AUTH_LOGIN]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
