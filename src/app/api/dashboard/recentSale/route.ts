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
        const transactions = await db.transcationModel.findMany({
            where: {
                sub: {
                    organizationId: parseInt(orgId),
                },
            },
            select: {
                amount: true,
                user: 
                {
                    select: {
                        name: true,
                        email: true,
                    }
                }
    }});
    return new Response(JSON.stringify({ data: transactions, size: transactions.length }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
    }
    catch (error) {
        // console.error(error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}