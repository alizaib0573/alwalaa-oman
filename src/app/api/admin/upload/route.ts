import { NextResponse } from 'next/server';
import { storageService } from '@/lib/supabase-storage';

export async function POST(request: Request) {
  try {
    // TODO: Add auth check (Task 5)
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const slug = formData.get('slug') as string;

    if (!file || !slug) {
      return NextResponse.json({ error: 'Missing file or slug' }, { status: 400 });
    }

    const path = await storageService.uploadPropertyImage(slug, file);
    const url = storageService.getPublicUrl(path);

    return NextResponse.json({ url });
  } catch (error) {
    console.error('[UPLOAD_POST]', error);
    return NextResponse.json({
      error: 'Upload failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
