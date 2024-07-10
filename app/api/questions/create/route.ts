import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'

export async function POST(request: NextRequest) {
  try {
    console.log('----------------');
    const body = await request.json();
    const { explanation, options, correctAnswer, questionText, domainId } = body;
    console.log(body);
    const question = await prisma.question.create({
      data: {
        explanation,
        options,
        correctAnswer,
        questionText,
        domain: {
          connect: { id: domainId },
        },
      },
    });
    return NextResponse.json(question, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create question' }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";
// import prisma from '../../../lib/prisma'

// export async function POST(req: Request) {
//   const { title } = await req.json();

//   await prisma.todo.create({
//     data: { title, complete: false },
//   });

//   return NextResponse.json({ message: "Created Todo" }, { status: 200 });
// }