import { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {

                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {

                    return user
                } else {


                }
            }
        })
    ]
}