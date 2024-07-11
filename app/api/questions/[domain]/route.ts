import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  context: { params: { domain: string } }
) => {
  try {
    console.log('here : ', context.params.domain)
    const questions = await prisma.question.findMany({
      where : {
        domain : {
          value :  context.params.domain
        }
      },
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
