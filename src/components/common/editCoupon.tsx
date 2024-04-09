import React, { FC, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from 'lucide-react';

interface props {
    couponData: Array<string>;
    setCouponData: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const EditCoupon: FC<props> = ({ couponData, setCouponData }) => {
    const [seeAdd, setSeeAdd] = useState(true);
    useEffect(()=>{
        // console.log(couponData);
        if(couponData.length === 0)
            setSeeAdd(true);
        else if(couponData[couponData.length - 1].length > 0 && couponData[couponData.length - 2].length > 0)
            setSeeAdd(true);
        else    
            setSeeAdd(false);
    }, [couponData])
    

    function handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number): void {
        let extract = [...couponData];
        extract[index] = event.target.value;
        setCouponData(extract);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Coupons</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit/ Add Coupon code</DialogTitle>
                    <DialogDescription>
                        Make changes to your Coupon code here. Click save when you
                        are done.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className='text-slate-300 text-sm'><span className='mr-16'>Coupon Code</span><span>Discount (%)</span></div>
                    <form>
                        {couponData.length < 2 ? <div onClick={() => setCouponData([...couponData, "", ""])} className='hover:bg-slate-900 w-12 h-9 ml-24 cursor-pointer mb-3 rounded-full flex items-center justify-center'><Plus size={20} color="#ffffff" strokeWidth={3} /></div> : null}
                        {couponData.map((field: string, index: number) =>
                            index % 2 === 0 ?
                                <div key={index} className='flex'>
                                    <div className='w-[300px] flex'>
                                    <Input
                                        className="text-white mb-3 mt-1 basis-1/2 mr-4"
                                        type="text"
                                        name="type"
                                        value={field}
                                        onChange={(event) => handleChange(event, index)} />

                                    <Input
                                        className="text-white mb-3 mt-1 basis-1/2 mr-4"
                                        type="text"
                                        name="type"
                                        value={couponData[index + 1]}
                                        onChange={(event) => handleChange(event, index + 1)} />
                                    </div>
                                    { index == couponData.length-2 && seeAdd && <div onClick={() => setCouponData([...couponData, "", ""])} className='hover:bg-slate-900 w-12 cursor-pointer mb-3 rounded-full flex items-center justify-center'><Plus size={20} color="#ffffff" strokeWidth={3} /></div> }

                                    {<div onClick={() => setCouponData(couponData.slice(0, -2))} className='hover:bg-slate-900 w-12 cursor-pointer mb-3 rounded-full flex items-center justify-center'><Minus size={20} color="#ffffff" strokeWidth={3} /></div>}
                                </div> : null
                        )}
                    </form>
                </div>
                <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">Save</Button>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditCoupon;