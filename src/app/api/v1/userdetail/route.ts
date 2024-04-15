import { db } from "@/lib/prisma";

export async function POST(req: Request, res: Response) {
    try {
        const { orgId, userId } = await req.json();
        console.log(userId);
        let key = req.headers.get("x-api-key");
        const orgKey = await db.orgModel.findUnique({
            where: {
                id: parseInt(orgId),
            },
            select: {
                APIKey: true,
            },
        });

        // if (!orgKey || orgKey.APIKey !== key || !userId) {
        //     return new Response(
        //         JSON.stringify({ message: "We are unable to find your organization or user." }),
        //         {
        //             status: 404,
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         }
        //     );
        // }

        const user = await db.userModel.findMany({
            where: {
                userId: userId,
                plan: {
                    organization: {
                        id: parseInt(orgId),
                    },
                },
            },
            select: {
                id: true,
                name: true,
                email: true,
                planExpiry: true,
                plan: {
                    select: { type: true },
                },
            },
        });
        let response = [];
        for (let item of user) {
            let temp = {
                id: item.id,
                name: item.name,
                email: item.email,
                planExpiry: item.planExpiry,
                planType: item.plan.type
            };
            response.push(temp);
        }

        return new Response(JSON.stringify({ user: userId, orgId: orgId, key: key, orgKey: orgKey, user: user, response: response }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
