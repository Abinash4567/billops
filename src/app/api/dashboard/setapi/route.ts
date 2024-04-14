import { db } from '@/lib/prisma';

export async function POST(req: Request, res: Response) {
    const { orgId, key } = await req.json();
    if (!orgId) {
        return new Response(JSON.stringify({ message: "Missing Parameter" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    try {
        const response = await db.orgModel.update({
            where: {
                id: parseInt(orgId),
            },
            data: {
                APIKey: key,
            },
        });

        return new Response(JSON.stringify({ message: "Done" }), {
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
                "Content-Type": "application/json",
            },
        });
    }
}
