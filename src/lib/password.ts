import bcrypt from 'bcryptjs';

/**
 * Hashes a plain text password using bcrypt.
 * @param password The plain text password to hash.
 * @returns A promise that resolves to the hashed password.
 */
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12);
}

/**
 * Verifies a plain text password against a hashed password.
 * @param password The plain text password to verify.
 * @param hash The hashed password to compare against.
 * @returns A promise that resolves to true if the password is valid, false otherwise.
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
