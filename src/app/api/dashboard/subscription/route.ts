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
        const subscriptions = await db.subModel.findMany({
            where: {
                organizationId: parseInt(orgId),
            },
            select:{
                id: true,
                type: true,
                intendedAudience: true,
                price: true,
                features: true,
                couponCodes: true,
                validity: true,
            }
        });

        return new Response(JSON.stringify({ data: subscriptions }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
} 
catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
        status: 500,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
}