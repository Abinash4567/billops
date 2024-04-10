import { db } from '@/lib/prisma';

export async function POST(req: Request, res: Response) {
    const { subId } = await req.json();
    if (!subId) {
        return new Response(JSON.stringify({ message: "Missing Parameter" }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    console.log(subId);

    try {
        const transactions = await db.subModel.delete({
            where: {
                id: parseInt(subId) 
            }
    });

    return new Response(JSON.stringify({ data: transactions, message: "Successfully deleted" }), {
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