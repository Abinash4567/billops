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
    featureData: Array<string>;
    setFeatureData: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const EditCoupon: FC<props> = ({ featureData, setFeatureData }) => {
    const [seeAdd, setSeeAdd] = useState(true);
    useEffect(()=>{
        // console.log(featureData);
        if(featureData.length === 0)
            setSeeAdd(true);
        else if(featureData[featureData.length - 1].length > 0 && featureData[featureData.length - 2].length > 0)
            setSeeAdd(true);
        else    
            setSeeAdd(false);
    }, [featureData])
    

    function handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number): void {
        let extract = [...featureData];
        extract[index] = event.target.value;
        setFeatureData(extract);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Features</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit/ Add privilege to your users</DialogTitle>
                    <DialogDescription>
                        Make changes to feature you provide. Click save when you
                        are done.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className='text-slate-300 text-sm'><span className='mr-32'>Feature</span><span>Amount / Presence</span></div>
                    <form>
                        {featureData.length < 2 ? <div onClick={() => setFeatureData([...featureData, "", ""])} className='hover:bg-slate-900 w-12 h-9 ml-24 cursor-pointer mb-3 rounded-full flex items-center justify-center'><Plus size={20} color="#ffffff" strokeWidth={3} /></div> : null}
                        {featureData.map((field: string, index: number) =>
                            index % 2 === 0 ?
                                <div key={index} className='flex'>
                                    <div className='w-[300px] flex'>
                                    <Input
                                        className="text-white mb-3 mt-1 basis-1/2 mr-4 w-44"
                                        type="text"
                                        name="type"
                                        value={field}
                                        onChange={(event) => handleChange(event, index)} />

                                    <Input
                                        className="text-white mb-3 mt-1 basis-1/2 mr-4"
                                        type="text"
                                        name="type"
                                        value={featureData[index + 1]}
                                        onChange={(event) => handleChange(event, index + 1)} />
                                    </div>
                                    { index == featureData.length-2 && seeAdd && <div onClick={() => setFeatureData([...featureData, "", ""])} className='hover:bg-slate-900 w-12 cursor-pointer mb-3 rounded-full flex items-center justify-center'><Plus size={20} color="#ffffff" strokeWidth={3} /></div> }

                                    {<div onClick={() => setFeatureData(featureData.slice(0, -2))} className='hover:bg-slate-900 w-12 cursor-pointer mb-3 rounded-full flex items-center justify-center'><Minus size={20} color="#ffffff" strokeWidth={3} /></div>}
                                </div> : null
                        )}
                    </form>
                </div>
                <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">Submit</Button>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditCoupon;