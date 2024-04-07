import { db } from "@/lib/prisma";


// export type IUser = {
//     userId: string;
//     name: string;
//     email: string;
//     planExpiry: Date | null;
//     createdAt: Date | null;
//     planId: number | null;
//     trans: Array<ITranscationDetail>;
// } | null;

// type ITranscationDetail = {
//     amount: number;
//     receipt: Receipt;
//     status: boolean;
//     created_at: string;
//     sub: Subscription;
// } | null;

// type Receipt = {
//     id: string;
//     vpa: string | null;
//     bank: string | null;
//     email: string;
//     notes: { address: string };
//     amount: number;
//     method: string;
//     status: string;
//     wallet: string | null;
//     card_id: string | null;
//     contact: string;
//     currency: string;
//     created_at: number;
//     acquirer_data: { bank_transaction_id: string };
// } | null;

// type Subscription = {
//     type: string;
//     organization: { orgName: string };
// };


export async function POST(req: Request, res: Response) {
    let { userId } = await req.json();

    try {
        userId = userId + "\n";
        const fetchedUserDetail = await db.userModel.findFirst({
            where: { userId: userId.toString() },
            select: {
                userId: true,
                name: true,
                email: true,
                createdAt: true,
                planExpiry: true,
                plan: {
                    select: {
                        type: true,
                    },
                },
                trans: {
                    select: {
                        amount: true,
                        receipt: true,
                        status: true,
                        created_at: true,
                        sub: {
                            select: {
                                type: true,
                                organization: {
                                    select: {
                                        orgName: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        if (fetchedUserDetail==null) {
            return new Response(JSON.stringify({ message: "No such user found" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        else if(fetchedUserDetail!=null)
        {
        // console.log(fetchedUserDetail);
        return new Response(JSON.stringify({ data: fetchedUserDetail }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
