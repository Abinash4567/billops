import { db } from '@/lib/prisma';

const revenueCalc = async (startDate: Date, endDate: Date, orgId: string):Promise<number> => {
    try{
        const transactions = await db.transcationModel.findMany({
            where: {
                sub: {
                    organizationId: parseInt(orgId),
                },
                created_at: {
                    gte: startDate,
                    lte: endDate,
                },
                status: true,
            },
            select: {
                amount: true,
            },
        });
    
        const totalRevenue = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    
        return totalRevenue;
    }
    catch(error){
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

        const prevStartDate = new Date(presentYear, presentMonth - 1, 1);
        const prevEndDate = new Date(presentYear, presentMonth -1 , presentDay);
        const presentStartDate = new Date(presentYear, presentMonth , 1);

        const prevMonthReveneue =  await revenueCalc(prevStartDate, prevEndDate, orgId);
        const presentMonthReveneue =  await revenueCalc(presentStartDate, today, orgId);
        const percentChange = ((presentMonthReveneue -prevMonthReveneue) / (prevMonthReveneue>0?prevMonthReveneue:1)) * 100;

        // console.log(percentChange);
        return new Response(JSON.stringify({ amount: percentChange }), {
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