import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/app/lib/prisma';
import { NextAuthOptions } from "next-auth"

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
                // const user = usersArr.find((item) => item.email === credentials.email);
                // if(user?.password === credentials.password) {
                //     return user;
                // }
                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            email : credentials.email
                        }
                    });
                    if(user?.password) {
                        if(user?.password === credentials.password) {
                            console.log('--------');
                            console.log(user);
                            console.log('--------');
                            return user;
                        }
                    }
                    return null;
                } catch (error) {
                    console.log(error)
                    return null;
                }
                
            },
        }),
    ],
    secret : process.env.NEXTAUTH_SECRET,
    pages: {
        error: '/auth/login-error',
        signIn: '/auth/login',
        signOut: '/quiz',  // Redirect to after sign out
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (user) {
                console.log('---- LOGIN -----');
                return true;
            } else {
                console.log('---- LOGIN ERROR -----');
                return '/auth/login-error'; // Redirect on login failure
            }
        },
        async redirect({ url, baseUrl }) {
            // Redirect users to /quiz after successful login
            return '/quiz';
        },
    }
};