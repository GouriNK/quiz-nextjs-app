import { MasterDataType } from '@/app/lib/definitions';
import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const domains = await prisma.masterData.findMany({
      where: {
        type: 'domain',
      },
    })
    return NextResponse.json(domains);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch domains' }, { status: 500 });
  }
}