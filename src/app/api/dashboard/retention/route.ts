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
        const expiredUsers = await db.userModel.count({
            where: {
                plan: {
                    organizationId: parseInt(orgId),
                },
                planExpiry: {
                    lte: new Date(),
                },
            },
        });
        const totalUsers = await await db.userModel.count({
            where: {
                plan: {
                    organizationId: parseInt(orgId),
                },
                planExpiry: {
                    gte: new Date(),
                },
            },
        });
        let retention = ((totalUsers - (expiredUsers > 0 ? expiredUsers : 1))/(totalUsers))*100;
        if(totalUsers == 0)
            retention = 0;
        else if (expiredUsers == 0)
            retention = 100;
        

        return new Response(JSON.stringify({ numbers: retention }), {
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