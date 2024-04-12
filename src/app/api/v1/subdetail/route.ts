import { db } from "@/lib/prisma";

export async function POST(req: Request, res: Response) {
    try {
    const { orgId } = await req.json();
    let key = req.headers.get("x-api-key");
    const orgKey = await db.orgModel.findUnique({
        where: {
            id: orgId,
        },
        select: {
            APIKey: true,
        },
    });

    if (!orgKey || orgKey.APIKey !== key) {
        return new Response(
            JSON.stringify({ message: "We are unable to find your organization." }),
            {
                status: 404,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    const subscriptions = await db.subModel.findMany({
        where: { organizationId: orgId },
        select: {
            type:true,
            intendedAudience: true,
            price: true,
            features: true,
            couponCodes: true,
            validity: true
        },
    });

    return new Response(JSON.stringify({ subscriptionDetail: subscriptions }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
    }
    catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
