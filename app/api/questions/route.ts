import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      include: {
        domain: true,
      },
    })
    return NextResponse.json(questions);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}