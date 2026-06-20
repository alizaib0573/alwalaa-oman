import { NextResponse } from 'next/server';
import { communityService } from '@/services/community.service';
import { z } from 'zod';

const communityUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  imageUrl: z.string().optional(),
  featured: z.boolean().optional(),
}).partial();

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // TODO: Add auth check (Task 5)
    const { id } = await params;
    const body = await request.json();
    const validatedData = communityUpdateSchema.parse(body);
    const community = await communityService.update(id, validatedData);
    return NextResponse.json(community);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    console.error('[ADMIN_COMMUNITIES_PATCH]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // TODO: Add auth check (Task 5)
    const { id } = await params;
    await communityService.delete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[ADMIN_COMMUNITIES_DELETE]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // TODO: Add auth check (Task 5)
    const { id } = await params;
    const community = await communityService.getById(id);
    if (!community) {
      return NextResponse.json({ error: 'Community not found' }, { status: 404 });
    }
    return NextResponse.json(community);
  } catch (error) {
    console.error('[ADMIN_COMMUNITIES_GET_ID]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
