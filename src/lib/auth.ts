import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET = process.env.ADMIN_SECRET || 'super-secret-luxury-key-2026';

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(new TextEncoder().encode(SECRET));
}

export async function decrypt(input: string) {
  const { payload } = await jwtVerify(input, new TextEncoder().encode(SECRET));
  return payload;
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  if (!session) return null;
  try {
    return await decrypt(session);
  } catch (e) {
    return null;
  }
}
