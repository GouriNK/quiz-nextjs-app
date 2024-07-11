import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const PUT = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  const body = await request.json();
  try {
    const updatedQuestion = await prisma.question.update({
      where: { id: context.params.id },
      data: {
        questionText: body.questionText,
        explanation: body.explanation,
        correctAnswer: body.correctAnswer,
        options: body.options,
        domain: {
          connect: { id: body.domainId },
        },
      },
    });
    return NextResponse.json(updatedQuestion, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update question' }, { status: 500 });
  }
}