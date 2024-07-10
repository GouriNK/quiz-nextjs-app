import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
    req: NextRequest,
    context: { params: { id: string } }
  ) => {
    try {
      console.log('here in findById : ', context.params.id)
      const questionById = await prisma.question.findUnique({
        where : {
          id : context.params.id
        },
        include: {
          domain: true,  // Include the related MasterData
        },
      });
      return NextResponse.json(questionById);
    } catch (error) {
      console.error('Error retrieving questionById:', error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
  