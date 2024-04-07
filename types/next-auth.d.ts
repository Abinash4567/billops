import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { nullable } from "zod";

declare module "next-auth" {
    interface User {
        id?: string,
        OrgName?: string,
        workEmail?: string,
    }

    interface Session {
        user: User;
        maxAge: number;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: User;
    }
}

export interface IEventDetail{
    amount: number;
    accoutCreation: number;
    createdAt: Date;
    id: string;
    status: string;
    plan: string;
};

interface ITranscationDetail {
    amount: number;
    receipt: Receipt;
    status: boolean;
    created_at: Date;
    sub: Subscription;
};

interface Receipt {
    id: string;
    vpa: string | null;
    bank: string | null;
    email: string;
    notes: { address: string };
    amount: number;
    method: string;
    status: string;
    wallet: string | null;
    card_id: string | null;
    contact: string;
    currency: string;
    created_at: number;
    acquirer_data: { bank_transaction_id: string };
};

interface Subscription {
    type: string;
    organization: { orgName: string };
};