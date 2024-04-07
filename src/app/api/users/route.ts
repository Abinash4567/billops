import { db } from "@/lib/prisma";

export interface userDetail {
    userId: string;
    name: string;
    email: string;
    planExpiry: Date | null;
    createdAt: Date | null;
    trans?: { amount: number }[];
    totalTransactionAmount?: number;
}

export async function POST(req: Request, res: Response) {
    const { orgId } = await req.json();
    if (!orgId) {
        return new Response(JSON.stringify({ message: "Missing Parameter" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    try {
        const users: Array<userDetail> = await db.userModel.findMany({
            where: {
                plan: {
                    organizationId: parseInt(orgId),
                },
            },
            select: {
                userId: true,
                name: true,
                email: true,
                planExpiry: true,
                createdAt: true,
                trans: {
                    where: {
                        status: true,
                    },
                    select: {
                        amount: true,
                    },
                },
            },
        });

        users.forEach((user) => {
            const totalTransactionAmount = user.trans?.reduce(
                (sum, trans) => sum + trans.amount,
                0
            );
            user.totalTransactionAmount = totalTransactionAmount;
            delete user.trans;
        });

        return new Response(JSON.stringify({data: users}), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
