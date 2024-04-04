import { fetchTotalUsers } from '@/lib/dashboard/serverMethods';
import { db } from '@/lib/prisma';

const userRecurr = async (endDate: Date, orgId: string): Promise<number> => {
    try {
        const userCount = await db.userModel.count({
            where: {
                plan: {
                    organizationId: parseInt(orgId),
                },
                planExpiry: {
                    gte: endDate,   
                },
                createdAt: {
                    lte: endDate,   
                },
            },
        });

        return userCount;
    }
    catch (error) {
        throw new Error("Error fetching Data");
    }
}


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

    try 
    {
        const today = new Date();
        const presentMonth = today.getMonth();
        const presentDay = today.getDay();
        const presentYear = today.getFullYear();

        const prevEndDate = new Date(presentYear, presentMonth - 1, presentDay);

        const totalUsers = await fetchTotalUsers( { orgId });
        const prevMonthUsers = await userRecurr(prevEndDate, orgId);
        const presentMonthUsers = await userRecurr(today, orgId);

        const retentionChange = (presentMonthUsers - prevMonthUsers);

        return new Response(JSON.stringify({ numbers: retentionChange }), {
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