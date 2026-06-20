import { NextResponse } from 'next/server';
import { propertyService } from '@/services/property.service';
import { z } from 'zod';

const propertyUpdateSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  status: z.string().optional(),
  city: z.string().optional(),
  location: z.string().optional(),
  communityId: z.string().uuid().optional(),
  agentId: z.string().uuid().optional(),
  price: z.coerce.number().optional(),
  currency: z.string().optional(),
  bedrooms: z.coerce.number().optional(),
  bathrooms: z.coerce.number().optional(),
  areaSqm: z.coerce.number().optional(),
  gallery: z.array(z.string()).optional(),
  amenities: z.array(z.string()).optional(),
  coordinates: z.any().optional(),
  featured: z.coerce.boolean().optional(),
}).partial();

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // TODO: Add auth check (Task 5)
    const { id } = await params;
    const body = await request.json();
    const validatedData = propertyUpdateSchema.parse(body);

    const property = await propertyService.update(id, validatedData);

    return NextResponse.json(property);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('[ADMIN_PROPERTIES_PATCH]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // TODO: Add auth check (Task 5)
    const { id } = await params;
    await propertyService.delete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[ADMIN_PROPERTIES_DELETE]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // TODO: Add auth check (Task 5)
    const { id } = await params;
    const property = await propertyService.getById(id);
    if (!property) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 });
    }
    return NextResponse.json(property);
  } catch (error) {
    console.error('[ADMIN_PROPERTIES_GET_ID]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
