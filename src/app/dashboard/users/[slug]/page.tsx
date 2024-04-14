import { fetchUserDetail } from "@/lib/dashboard/serverMethods";
import { FC } from "react"
import Event from "@/components/common/event";
import { ITranscationDetail } from "../../../../../types/next-auth";

interface PageProps {
    params: { slug: string }
}

const User: FC<PageProps> = async ({ params }) => {
    const { slug } = params;
    const userData = await fetchUserDetail(slug);
    // console.log(userData);
    const transDetail: Array<ITranscationDetail> = userData.trans;
    return (
        <div className="pt-6 pl-5 w-[calc(100vw-600px)] overflow-y-scroll no-scrollbar h-screen">
            <div className="font-bold leading-none tracking-tight text-slate-300">User <div className="text-2xl text-green-600">{userData.name}</div></div>
            <div className="mt-5">
                <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">User details</div>
                <div className="text-slate-300 text-sm">Customer Id: <span className="text-white font-medium">{userData.userId}</span></div>
                <div className="text-slate-300 text-sm">Name:<span className="text-white font-medium">  {userData.name}</span></div>
                <div className="text-slate-300 text-sm">Email:<span className="text-white font-medium">  {userData.email}</span></div>
                <div className="text-slate-300 text-sm">Joining Date:<span className="text-white font-medium">  {userData.createdAt.toLocaleString().replace('-', '/').split('T')[0].replace('-', '/')}</span></div>
            </div>

            <div className="mt-5">
                <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">Last Billing details</div>
                <div className="text-slate-300 text-sm">Order Id:  <span className="text-white font-medium">  {userData.trans.slice(-1)[0].receipt.id}</span></div>
                <div className="text-slate-300 text-sm">Method:<span className="text-white font-medium">  {userData.trans.slice(-1)[0].receipt.method}</span></div>
                <div className="text-slate-300 text-sm">Currency:<span className="text-white font-medium">  {userData.trans.slice(-1)[0].receipt.currency}</span></div>
                <div className="text-slate-300 text-sm">Status:<span className="text-white font-medium">  {userData.trans.slice(-1)[0].receipt.status}</span></div>
                <div className="text-slate-300 text-sm">Amount:<span className="text-white font-medium">  {userData.trans.slice(-1)[0].receipt.amount}</span></div>
                <div className="text-slate-300 text-sm">Merchant:<span className="text-white font-medium"> Razorpay</span></div>
            </div>

            <div className="mt-5">
                <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">Current Subscription details</div>
                <div className="text-slate-300 text-sm mt-2 mb-1">status:<span>{userData.planExpiry < new Date() ? (<span className='bg-red-400 w-12 text-center rounded-md ml-2 text-white p-1'>Expired</span>) : (<span className='bg-green-400 w-12 text-center rounded-md ml-2 text-white p-1'>Active</span>)}</span></div>
                <div className="text-slate-300 text-sm">Plan: <span className="text-white font-medium">{userData.plan.type}</span></div>
                <div className="text-slate-300 text-sm">Next Billing Date: <span className="text-white font-medium">{userData.planExpiry.toLocaleString().replace('-', '/').split('T')[0].replace('-', '/')}</span></div>
            </div>
            <div className="mt-5">
                <div className="font-semibold tracking-tight text-slate-300 border-b border-b-slate-100">Events</div>
                {transDetail.map((d, i) => (
                    <Event
                        key={i}
                        amount={d.amount}
                        accoutCreation={userData.createdAt}
                        createdAt={d.created_at}
                        id={d.receipt.id}
                        status={d.receipt.status}
                        plan={d.sub.type}
                    />
                ))}
            </div>
        </div>
    )
}

export default User;