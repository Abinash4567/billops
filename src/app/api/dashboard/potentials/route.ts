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
        const userCount = await db.userModel.count({
            where: {
                plan: {
                    organizationId: parseInt(orgId),
                },
                planExpiry:{
                    lte: new Date(),
                }
            },
        });

        return new Response(JSON.stringify({ numbers: userCount }), {
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