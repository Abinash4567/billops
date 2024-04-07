import { Check } from 'lucide-react';
import React from 'react';

interface SubDetail {
    features?: {
        [key: string]: string | null | undefined;
    };
}

const Subfeature: React.FC<{ subDetail?: SubDetail }> = ({ subDetail }) => {
    const arr = Object.entries(subDetail! || {});
    const data:Array<string> = arr.flat();
    // console.log(subDetail);
    return (
        <div className='features mt-5'>
            {data.map((item, index) => {
                if (index % 2 === 1) { 
                    return null;
                }
                const label:string = data[index]; 
                const value:string = data[index+1]; 
                return (
                    <div key={index} className='flex mx-7 mt-3'>
                        <Check color="#0ecd11" />
                        {label}: {value}
                    </div>
                );
            })}
        </div>
    );
}

export default Subfeature;