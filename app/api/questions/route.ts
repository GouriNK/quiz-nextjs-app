import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const questions = await prisma.question.findMany({
      include: {
        domain: true,  // Include the related MasterData
      },
    });
    return NextResponse.json(questions);
  } catch (error) {
    console.error('Error retrieving Questions:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
