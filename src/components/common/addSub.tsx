'use client';

import { Button } from "@/components/ui/button"
import { useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "../ui/input";
import EditFeature from "./editFeature";
import EditCoupon from "./editCoupon";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useSession } from 'next-auth/react';



// interface props {
//     subdetail: {
//         id?: number,
//         type?: string,
//         intendedAudience?: string,
//         price?: number,
//         features?: Record<string, string>,
//         couponCodes?: Record<string, string>,
//         validity?: number,
//     }
// }

const refineData = (data: Record<string, string>) => {
    let ans: Array<string> = new Array();
    let keys = Object.keys(data);
    keys.map((key) => {
        ans.push(key);
        ans.push(data[key])
    });
    let temp = ans.flat();
    return temp;
}




const AddSub = () => {
    const { data: session } = useSession();
    const orgId: string = session?.user.id!;
    const router = useRouter();
    const [formData, setFormData] = useState({
        type: "Default",
        price: 0,
        validity: 0,
        intendedAudience: "Your Audience",
    });

    const defaultCoupon:Record<string, string> =  {"new" : "12"} ;
    const defaultFeature:Record<string, string> =  {"revision" : "12"} ;

    const flattenedCoupon: Array<string> = refineData(defaultCoupon);
    const flattenedFeatures: Array<string> = refineData(defaultFeature);
    const [couponData, setCouponData] = useState(flattenedCoupon);
    const [featureData, setFeatureData] = useState(flattenedFeatures);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    // const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //   const { name, value } = e.target;
    //   setFormData({
    //     ...formData,
    //     [name]: JSON.parse(value),
    //   });
    // };

    const handleSubmit = async () => {
        // console.log(formData);
        // console.log(couponData);
        // console.log(featureData);
        let coupon = {};
        let feature = {};
        for (let i = 0; i < couponData.length; i += 2) {
            let dd: string = couponData[i];
            let ee: string = couponData[i + 1];
            coupon = { ...coupon, [dd]: ee };
        }

        for (let i = 0; i < featureData.length; i += 2) {
            let dd: string = featureData[i];
            let ee: string = featureData[i + 1];
            feature = { ...feature, [dd]: ee };
        }
        // console.log(coupon);
        // console.log(feature);

        // const couponjson = JSON.stringify(coupon);
        // const featurejson = JSON.stringify(feature);
        // console.log(featurejson);
        // console.log(couponjson);
        const response = await fetch('/api/dashboard/addSubscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orgId: orgId,
                data: { ...formData, coupon, feature }
            })
        })
        // console.log(response);

        if (response.ok) {

            toast({
                title: "Added Subscription.",
                description: "Proceed to Subscriptions.",
            })
        }
        else {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem adding your subscription Model.",
            })
            console.error(`Registration failed.`)
        }
        router.refresh();

    };

    return (
        <Sheet>
            <SheetTrigger asChild>
            <div className='rounded-full justify-self-center self-center mb-7 hover:bg-slate-700 p-3 transition ease-in-out duration-200 cursor-pointer'><Plus size={28} strokeWidth={2.5} /></div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Add Subscription details</SheetTitle>
                    <SheetDescription>
                        Add Features to your Subscription details here. Click save when you
                        are done.
                    </SheetDescription>
                </SheetHeader>
                <div className="border border-white rounded-xl px-7 w-[350px] mt-3 py-3 overflow-y-auto">
                    <form>

                        <label className="text-slate-400">
                            Type:
                            <Input
                                className="text-white mb-3 mt-1"
                                type="text"
                                name="type"
                                value={formData.type}
                                onChange={(event) => handleChange(event)}
                            />
                        </label>

                        <label className="text-slate-400">
                            Intended Audience:
                            <Input
                                className="text-white mb-3"
                                type="text"
                                name="intendedAudience"
                                value={formData.intendedAudience}
                                onChange={(event) => handleChange(event)}
                            />
                        </label>

                        <div className="flex flex-col gap-4">
                            <EditFeature featureData={featureData} setFeatureData={setFeatureData} />
                            <EditCoupon couponData={couponData} setCouponData={setCouponData} />
                        </div>


                        {/* <label className="text-slate-400">
            Features:
            <Textarea
                className="text-white min-h-[100px] mb-3"
                name="features"
                value={JSON.stringify(formData.features)}
                onChange={(event) => handleJsonChange(event)}
            />
            </label>

            <label className="text-slate-400">
            Coupon Codes:
            <Textarea
                className="text-white min-h-[50px] mb-3"
                name="couponCodes"
                value={JSON.stringify(formData.couponCodes)}
                onChange={(event) => handleJsonChange(event)}
            />
            </label> */}

                        <div className="grid gap-4 grid-cols-2 mt-3">
                            <label className="text-slate-400 basis-1/2 gap-3">
                                Price:
                                <Input
                                    className="text-white mb-3"
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={(event) => handleChange(event)}
                                />
                            </label>

                            <label className="text-slate-400 basis-1/2">
                                Validity:
                                <Input
                                    className="text-white mb-3"
                                    type="number"
                                    name="validity"
                                    value={formData.validity}
                                    onChange={(event) => handleChange(event)}
                                />
                            </label>
                        </div>
                    </form>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <div className="flex flex-col mt-3">
                            <Button onClick={() => handleSubmit()} type="submit">Save changes</Button>
                            <div className="text-sm text-slate-400 mt-2">*current terms will be applied to customer billing.</div>
                        </div>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default AddSub;