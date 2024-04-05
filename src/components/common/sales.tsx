import { User } from "lucide-react";
import React from "react";

export type SalesProps = {
    name: string;
    email: string;
    saleAmount: string;
};

export default function Sales(props: SalesProps) {
    return (
        <div className="flex flex-wrap justify-between gap-3 mt-4">
            <section className="flex justify-between gap-3 ">
                <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
                    <div className="ml-[10px] mt-2"><User size={20} color="#c7b8b8" strokeWidth={2.5} /></div>
                </div>
                <div className="text-sm">
                    <p>{props.name}</p>
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-gray-400">
                        {props.email}
                    </div>
                </div>
            </section>
            <p>${props.saleAmount}</p>
        </div>
    );
}