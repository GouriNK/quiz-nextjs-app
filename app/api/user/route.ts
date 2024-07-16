import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error)  {
        console.error('Error retrieving Users:', error);
        return NextResponse.json({ error: error }, { status: 500 });
      }
}