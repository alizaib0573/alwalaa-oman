import { SignJWT, jwtVerify } from 'jose';

const SECRET = process.env.ADMIN_SECRET || 'super-secret-luxury-key-2026';

export async function encrypt(payload: { userId: string; role: string }) {
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
