import { db } from '@/lib/prisma';

export async function POST(req: Request){
    try {
        const { orgId } = await req.json();
        const id = Number(orgId);
        const totalRevenue = await db.transcationModel.aggregate({
            _sum: {
                amount: true,
            },
            where: {
                status: {
                    equals: true,
                },
                },
        });

        return new Response(JSON.stringify({ revenue: {totalRevenue}}), {
            status: 409,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } 
    catch (error) 
    {
        return new Response(JSON.stringify({ message: "Something went wrong" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } 
    finally {
        await db.$disconnect();
    }
}
