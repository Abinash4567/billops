import { FC } from "react"

interface PageProps {
    params: {slug: String}
}


const User:FC<PageProps> = ({params})=>{
    return (
    <div className="mt-6 ml-5 w-[calc(100vw-600px)]">
        <div className="text-4xl font-bold leading-none tracking-tight text-slate-300">Username {params.slug}</div>
        <div className="mt-12">
            <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">User details</div>
            <div className="text-slate-300 text-sm">Customer Id: <span className="text-white font-medium">sdkjn</span></div>
            <div className="text-slate-300 text-sm">Name:<span className="text-white font-medium">sdkjn</span></div>
            <div className="text-slate-300 text-sm">Email:<span className="text-white font-medium">sdkjn</span></div>
        </div>

        <div className="mt-5">
            <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">Billing details</div>
            <div className="text-white font-medium text-xl">Haodnf</div>
            <div className="text-slate-300 text-sm">Nampal</div>
            <div className="text-slate-300 text-sm">Emadcl</div>
        </div>

        <div className="mt-5">
            <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">Merchant details</div>
            <div className="text-white font-medium text-xl">Haodnf</div>
        </div>

        <div className="mt-5">
            <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">Subscription details</div>
            <div className="text-slate-300 text-sm mt-2 mb-1">status: <span className="bg-green-400 rounded-lg p-[3px] text-xs text-white font-medium">Active</span></div>
            <div className="text-slate-300 text-sm">Plan: <span className="text-white font-medium">sdkjn</span></div>
            <div className="text-slate-300 text-sm">Next Billing Date: <span className="text-white font-medium">sdkjn</span></div>
            <div className="text-slate-300 text-sm">Payment Details: <span className="text-white font-medium">sdkjn</span></div>
        </div>

        <div className="mt-5">
            <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">Events</div>
        </div>
    </div>)
}

export default User;