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


interface props {
    subdetail: { id: number,
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
  const { type, price, validity, intendedAudience } = subdetail;
  const [formData, setFormData] = useState({
    type: type,
    price: price,
    validity: validity,
    intendedAudience: intendedAudience,
  });

  const flattenedCoupon: Array<string> = refineData(subdetail.couponCodes); 
  const [couponData, setCouponData] = useState(flattenedCoupon);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
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
          <form onSubmit={handleSubmit}>
      
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
            <EditFeature />
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
            <br />
            <Button type="submit">Make changes</Button>
          </form>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="text-sm text-slate-400">*current changes will be applied to customer billing.</div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};


export default EditSub;