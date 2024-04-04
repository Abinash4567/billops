import { db } from '@/lib/prisma';

const userPotentials = async (endDate: Date, orgId: string): Promise<number> => {
    try {
        const userCount = await db.userModel.count({
            where: {
                plan: {
                    organizationId: parseInt(orgId),
                },
                planExpiry: {
                    lte: endDate,   
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

        const prevMonthUsers = await userPotentials(prevEndDate, orgId);
        const presentMonthUsers = await userPotentials(today, orgId);

        const potentialsChange = (presentMonthUsers - prevMonthUsers);

        return new Response(JSON.stringify({ numbers: potentialsChange }), {
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