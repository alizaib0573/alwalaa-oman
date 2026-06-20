import { NextResponse } from 'next/server';
import { propertyService } from '@/services/property.service';
import { z } from 'zod';
import { Prisma, PropertyType, PropertyStatus } from '@prisma/client';

const propertySchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.nativeEnum(PropertyType),
  status: z.nativeEnum(PropertyStatus),
  city: z.string(),
  location: z.string(),
  communityId: z.string().uuid(),
  agentId: z.string().uuid(),
  price: z.coerce.number(),
  currency: z.string().default('OMR'),
  bedrooms: z.coerce.number().optional(),
  bathrooms: z.coerce.number().optional(),
  areaSqm: z.coerce.number().optional(),
  gallery: z.array(z.string()).default([]),
  amenities: z.array(z.string()).default([]),
  coordinates: z.any().optional(),
  featured: z.coerce.boolean().default(false),
});

export async function POST(request: Request) {
  try {
    // TODO: Add auth check (Task 5)

    const body = await request.json();
    const validatedData = propertySchema.parse(body);

    const property = await propertyService.create(validatedData);

    return NextResponse.json(property);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('[ADMIN_PROPERTIES_POST_VALIDATION_ERROR]', error.issues);
      return NextResponse.json({
        error: 'Validation failed',
        details: error.issues
      }, { status: 400 });
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json({
          error: 'A property with this slug already exists',
          target: error.meta?.target,
        }, { status: 400 });
      }
    }
    console.error('[ADMIN_PROPERTIES_POST]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    // TODO: Add auth check (Task 5)
    const properties = await propertyService.getAll();
    console.log(`[ADMIN_PROPERTIES_GET] Returning ${properties.length} properties`);
    return NextResponse.json(properties);
  } catch (error) {
    console.error('[ADMIN_PROPERTIES_GET]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
