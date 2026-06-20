import { NextResponse } from 'next/server';
import { communityService } from '@/services/community.service';

export async function GET(request: Request) {
  try {
    const communities = await communityService.getAll();
    return NextResponse.json(communities);
  } catch (error) {
    console.error('[COMMUNITIES_GET]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
