import { TicketCheck } from 'lucide-react';
import React from 'react';

interface ICoupon {
    features?: {
        [key: string]: string | null | undefined;
    };
}

const CouponCode: React.FC<{ couponData?: ICoupon }> = ({ couponData }) => {
    const arr = Object.entries(couponData! || {});
    const data:Array<string> = arr.flat();
    // console.log(data);
    return (
        <div className='features mt-5'>
            {data.map((item, index) => {
                if (index % 2 === 1) { 
                    return null;
                }
                const label:string = data[index]; 
                const value:string = data[index+1]; 
                return (
                <div key={index} className='flex'>
                    <TicketCheck size={24} strokeWidth={1} />
                    <div  className="text-sm font-semibold ml-3 mt-1 text-blue-300">{label}
                    <span className="font-medium ml-4">{value}%</span></div>
                </div>
                );
            })}
        </div>
    );
}

export default CouponCode;