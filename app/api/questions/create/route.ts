import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export const POST = async (
    req: NextApiRequest,
    res: NextApiResponse,
  ) => {
  const { questionText, options, explanation, correctAnswer, domainId } = req.body
  const result = await prisma.question.create({
    data: {
        correctAnswer: correctAnswer,
        domainId: domainId,
        explanation: explanation,
        options : options,
        questionText : questionText,
        domain : { connect: { id: domainId } }
    },
  })
  return res.status(201).json(result)
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