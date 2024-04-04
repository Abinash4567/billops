import { db } from '@/lib/prisma';

export async function POST(req: Request, res: Response) {
    const { orgId } = await req.json();
    if (!orgId) {
        return new Response(JSON.stringify({ message: "Missing Parameter" }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    try {
        const organization = await db.orgModel.findUnique({
            where: { id: parseInt(orgId) },
            select: {
                subscriptions: {
                    select: {
                        trans: {
                            where:{ status: true },
                            select: {
                                amount: true,
                            },
                        },
                    },
                },
            },
        });

        if (!organization) {
            return new Response(JSON.stringify({ message: "Organization not found" }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        }

        const totalEarned = organization.subscriptions.reduce(
            (acc, curr) => acc + curr.trans.reduce((tAcc, t) => tAcc + t.amount, 0),0);

        return new Response(JSON.stringify({ amount: totalEarned }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}