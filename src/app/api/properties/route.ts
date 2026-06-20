import { NextResponse } from 'next/server';
import { propertyService } from '@/services/property.service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const filters = {
      type: searchParams.get('type') as any,
      status: searchParams.get('status') as any,
      communityId: searchParams.get('communityId') || undefined,
      featured: searchParams.has('featured') ? searchParams.get('featured') === 'true' : undefined,
      minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
      maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
      search: searchParams.get('search') || undefined,
    };

    const properties = await propertyService.getAll(filters);

    return NextResponse.json(properties);
  } catch (error) {
    console.error('[PROPERTIES_GET]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
