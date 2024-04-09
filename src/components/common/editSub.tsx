'use client';

import { Button } from "@/components/ui/button"
import { useState } from "react";
import { FC } from "react"
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
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";


interface props {
    subdetail: { id?: number,
                type: string,
                intendedAudience: string,
                price: number,
                features: Record<string, string>,
                couponCodes: Record<string, string>,
                validity: number,
    }
}

const refineData = (data: Record<string, string>)=>{
  let ans:Array<string> = new Array();
  let keys = Object.keys(data);
  keys.map((key)=>{
    ans.push(key);
    ans.push(data[key])
  });
  let temp = ans.flat();
  return temp;
}
const EditSub: FC<props> = ({ subdetail }) => {
  const router = useRouter();
  const { type, price, validity, intendedAudience } = subdetail;
  const [formData, setFormData] = useState({
    type: type,
    price: price,
    validity: validity,
    intendedAudience: intendedAudience,
  });

  const flattenedCoupon: Array<string> = refineData(subdetail.couponCodes); 
  const flattenedFeatures: Array<string> = refineData(subdetail.features);
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

  const handleSubmit = async() => {
    // console.log(formData);
    // console.log(couponData);
    // console.log(featureData);
    let coupon = {};
    let feature = {};
    for(let i=0; i<couponData.length; i+=2)
    {
      let dd:string = couponData[i];
      let ee:string = couponData[i+1];
      coupon = {...coupon, [dd]:ee};
    }

    for(let i=0; i<featureData.length; i+=2)
    {
      let dd:string = featureData[i];
      let ee:string = featureData[i+1];
      feature = {...feature, [dd]:ee};
    }

    // const couponjson = JSON.stringify(coupon);
    // const featurejson = JSON.stringify(feature);
    const response = await fetch('/api/dashboard/editSubscription', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subId: subdetail.id,
        data: {...formData, coupon, feature}
      })
  })
  // console.log(response);

  if (response.ok) {

      toast({
          title: "Updates were done.",
          description: "Proceed to Subscriptions.",
      })
  }
  else {
      toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem updating your subscription Model.",
      })
      console.error(`Registration failed.`)
  }
  router.refresh();

  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Subscription details</SheetTitle>
          <SheetDescription>
            Make changes to your Subscription details here. Click save when you
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
            <EditFeature featureData={featureData} setFeatureData={setFeatureData}/>
            <EditCoupon couponData={couponData} setCouponData={setCouponData}/>
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
            <Button onClick={()=>handleSubmit()}type="submit">Save changes</Button>
            <div className="text-sm text-slate-400 mt-2">*current changes will be applied to customer billing.</div>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EditSub;