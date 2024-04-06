import { AuthOptions, Session, User } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { JWT } from 'next-auth/jwt';

export const authOptions: AuthOptions = {
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user)
                token.user = user as User;

            return token;
        },
        async session({ session, token, user }: { session: Session, token: JWT, user: User }) {
            session.user = token.user as User;
            session.maxAge = 24 * 60 * 60;
            return session;
        }
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                WorkEmail: {},
                password: {}
            },
            async authorize(credentials) {

                if (!credentials?.WorkEmail || !credentials?.password) {     //missing data
                    return null;
                }

                const existingUser = await db.orgModel.findFirst({       //fetch user from database
                    where: {
                        workEmail: credentials?.WorkEmail
                    }
                })

                if (!existingUser) {                //no user exists in database
                    return null;
                }

                if (existingUser.password) {
                    // check if password matches
                    const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password);

                    if (!passwordMatch)
                        return null;
                }

                //successful sigin
                return {
                    id: existingUser.id.toString(),
                    OrgName: existingUser.orgName,
                    workEmail: existingUser.workEmail
                }
            }
        })
    ]
}