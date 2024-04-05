import { db } from '@/lib/prisma';

export async function POST(req: Request) {
    const { orgId, startDate, endDate } = await req.json();
    if (!orgId) {
        return new Response(JSON.stringify({ message: "Missing Parameter" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    try {
        const transactions = await db.transcationModel.findMany({
            where: {
                sub: {
                    organizationId: parseInt(orgId),
                },
                created_at: {
                    gte: startDate,
                    lte: endDate,
                },
                status : true,
            },
            select: {
                amount: true,
            },
        });

        const totalRevenue = transactions.reduce(
            (total, transaction) => total + transaction.amount, 0);
        return new Response(JSON.stringify({ amount: totalRevenue }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } 
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
