import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  context: { params: { domain: string } }
) => {
  try {
    const questions = await prisma.question.findMany({
      where : {
        domain : {
          value : {
            contains : context.params.domain
          }
        }
      },
      include: {
        domain: true,
      },
    })
    return NextResponse.json(questions);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}