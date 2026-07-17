import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { decrypt } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = await decrypt(session);
    if (payload.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ error: 'Forbidden: Super Admin only' }, { status: 403 });
    }

    const { status, isActive } = await request.json();

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        status: status !== undefined ? status : undefined,
        isActive: isActive !== undefined ? isActive : undefined,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('[UPDATE_USER]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
