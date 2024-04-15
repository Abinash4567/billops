import { db } from "@/lib/prisma";

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    console.log(data);
    try 
    {
        // const secret = "asdfghjkl";
        // const crypto = require("crypto");
        // const shasum = crypto.createHmac("sha256", secret);
        // shasum.update(JSON.stringify(req.body));
        // const digest = shasum.digest("hex");
        // console.log(digest, req.headers.get('x-razorpay-signature'));

        // if (digest !== req.headers.get("x-razorpay-signature")) {         //invalid Request
        //     return new Response(JSON.stringify({ message: "Captured" }), {
        //         status: 200,
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });
        // }

        // const data = await req.json();
        const transData = data.payload.payment.entity;
        const { notes, ...receipt } = transData;
        const userId = notes.userId;
        const planId = parseInt(notes.planId);
        const username = notes.name;
        const useremail = notes.email;
        console.log(notes, receipt, planId, userId, username, useremail);

        const planIdCheck = await db.subModel.findUnique({
            where: {
                id: planId,
            },
        });
        console.log(planIdCheck);

        if (!planIdCheck) {
            //plan not found
            //initiate refund
            console.log(`Plan Not found`);
            return new Response(JSON.stringify({ message: "Captured" }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const userIdCheck = await db.userModel.findFirst({
            where: {
                userId: userId,
            },
            select: {
                planExpiry: true,
            },
        });
        console.log(userIdCheck?.planExpiry);

        const userPlanCheck = await db.userModel.findFirst({
            where: {
                userId: userId,
                planId: planId,
            },
            select: {
                id: true,
            },
        });
        console.log(userPlanCheck);

        const planDetail = await db.subModel.findFirst({
            where: {
                id: planId,
            },
            select: {
                validity: true,
            },
        });
        console.log(planDetail)

        if (!userIdCheck || !userPlanCheck) {
            const expiry = new Date();
            expiry.setMonth(expiry.getMonth() + (planDetail?.validity ?? 0));
            const userdata = await db.userModel.create({
                data: {
                    userId: userId,
                    name: username,
                    email: useremail,
                    planExpiry: expiry,
                    planId: planId,
                },
            });
            console.log("new entry");
            console.log(userdata);

            await db.transcationModel.create({
                data: {
                    userId: userdata.id,
                    subId: planId,
                    receipt: receipt,
                    amount: (receipt.amount / 100),
                    status: true,
                    orderId: receipt.order_id,
                },
            });
        } 
        else 
        {
            const expiry = new Date();
            expiry.setMonth(expiry.getMonth() + (planDetail?.validity ?? 0));

            await db.userModel.update({
                where: {
                    id: userPlanCheck.id,
                },
                data: {
                    planExpiry: expiry,
                },
            });
            console.log('old update');

            await db.transcationModel.create({
                data: {
                    userId: userPlanCheck.id,
                    subId: planId,
                    receipt: receipt,
                    amount: receipt.amount,
                    status: true,
                    orderId: receipt.order_id,
                },
            });
        }

        

        return new Response(JSON.stringify({ message: "Captured" }), {
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
