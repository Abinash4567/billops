import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User {
        id?: String,
        OrgName?: string,
        workEmail?: string,
    }

    interface Session {
        user: User;
    }
}


declare module "next-auth/jwt" {
    interface JWT {
        user: User;
    }
}