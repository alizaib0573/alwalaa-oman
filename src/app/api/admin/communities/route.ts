import { NextResponse } from 'next/server';
import { communityService } from '@/services/community.service';
import { z } from 'zod';
import { Prisma } from '@prisma/client';

const communitySchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string().optional(),
  location: z.string(),
  imageUrl: z.string().optional(),
  featured: z.boolean().default(false),
});

export async function POST(request: Request) {
  try {
    // TODO: Add auth check (Task 5)
    const body = await request.json();
    const validatedData = communitySchema.parse(body);
    const community = await communityService.create(validatedData);
    return NextResponse.json(community);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json({
          error: 'A community with this slug already exists',
          target: error.meta?.target,
        }, { status: 400 });
      }
    }
    console.error('[ADMIN_COMMUNITIES_POST]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    // TODO: Add auth check (Task 5)
    const communities = await communityService.getAll();
    return NextResponse.json(communities);
  } catch (error) {
    console.error('[ADMIN_COMMUNITIES_GET]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
