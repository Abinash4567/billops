import { db } from '@/lib/prisma';

const usersCalc = async (startDate: Date, endDate: Date, orgId: string): Promise<number> => {
    try {
        const userCount = await db.userModel.count({
            where: {
                plan: {
                    organizationId: parseInt(orgId),
                },
                createdAt: {
                    gte: startDate, 
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

    try {
        const today = new Date();
        const presentMonth = today.getMonth();
        const presentDay = today.getDay();
        const presentYear = today.getFullYear();

        const prevStartDate = new Date(presentYear, presentMonth - 1, 1);
        const prevEndDate = new Date(presentYear, presentMonth - 1, presentDay);
        const presentStartDate = new Date(presentYear, presentMonth, 1);

        const prevMonthUsersCount = await usersCalc(prevStartDate, prevEndDate, orgId);
        const presentMonthUsersCount = await usersCalc(presentStartDate, today, orgId);
        const percentChange = ((presentMonthUsersCount - prevMonthUsersCount) / (prevMonthUsersCount > 0 ? prevMonthUsersCount : 1)) * 100;

        // console.log(percentChange);
        return new Response(JSON.stringify({ numbers: percentChange }), {
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