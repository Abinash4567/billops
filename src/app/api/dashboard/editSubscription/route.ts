import { db } from "@/lib/prisma";


// interface IValidate {
//     type: string,
//     intendedAudience: string,
//     price: number,
//     features: JSON,
//     couponCodes: JSON,
//     validity: number
// }

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { subId, ...data } = body;
        let updatedData = data.data;
        // console.log(updatedData);
        const validatedUpdateData = {
            type: updatedData.type,
            intendedAudience: updatedData.intendedAudience,
            price: updatedData.price,
            features: updatedData.feature,
            couponCodes: updatedData.coupon,
            validity: updatedData.validity,
        };
        const updatedSubModel = await db.subModel.update({
            where: { id: subId },
            data: validatedUpdateData
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