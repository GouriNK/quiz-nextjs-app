import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { usersArr } from '@/app/lib/placeholder-data';

export const authOptions: NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name: "creds1",
            credentials: {
                email: { label: "Email1", placeholder: "Enter email", type:"text"},
                password: { label: "Password1", placeholder: "Enter password", type: "password"},
            },
            async authorize(credentials) {
                if(!credentials || !credentials.email || !credentials.password)
                    return null;
                const user = usersArr.find((item) => item.email === credentials.email);
                if(user?.password === credentials.password) {
                    return user;
                }
                return null;
            },
        }),
    ],
    secret : process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }