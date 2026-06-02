import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

console.log('DEBUG: DATABASE_URL is', process.env.DATABASE_URL ? 'SET' : 'UNSET');

const prismaClientSingleton = () => {
  return new PrismaClient({});
};

declare global {
  var prisma: ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
