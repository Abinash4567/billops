import { db } from "@/lib/prisma";


// interface IValidate {
//     organizationId: number,
//     type: string,
//     intendedAudience: string,
//     price: number,
//     features: JSON,
//     couponCodes: Record<string, string>,
//     validity: number
// }

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { orgId, ...data } = body;
        let updatedData = data.data;
        const validatedUpdateData = {
            organizationId: parseInt(orgId),
            type: updatedData.type,
            intendedAudience: updatedData.intendedAudience,
            price: parseInt(updatedData.price),
            features: updatedData.feature,
            couponCodes: updatedData.coupon,
            validity: parseInt(updatedData.validity),
        };
        // console.log(validatedUpdateData);
        const updatedSubModel = await db.subModel.create({
            data: validatedUpdateData,
            // data:
            // {
            //     type: updatedData.type,
            //     intendedAudience: updatedData.intendedAudience,
            //     price: updatedData.price,
            //     features: updatedData.features,
            //     couponCodes: updatedData.couponCodes,
            //     validity:updatedData.validity
            // }
        });
        // console.log(updatedSubModel);
        return new Response(JSON.stringify({ updateFeature: updatedSubModel, message: "Features updated successfully" }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            }
        });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Something went wrong" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}