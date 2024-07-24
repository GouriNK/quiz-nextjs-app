import { authOptions } from "@/app/lib/authOptions";
import NextAuth from "next-auth"

// import { usersArr } from '@/app/lib/placeholder-data';


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }