import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { Session, getServerSession } from 'next-auth';
import React from 'react'
import { fetchSubscription } from '@/lib/dashboard/serverMethods';
import Subfeature from '@/components/common/subfeature';
import CouponCode from '@/components/common/couponCode';
import EditSub from '@/components/common/editSub';
import AddSub from '@/components/common/addSub';
import { DeleteSub } from '@/components/common/deleteSub';

interface IsubDetail {
  id: number,
  type: string,
  intendedAudience: string,
  price: number,
  features: Record<string, string>,
  couponCodes: Record<string, string>,
  validity: number,
}

export default async function Subscriptions() {
  const session: Session | null = await getServerSession(authOptions);
  const orgId: string = session?.user.id!;
  const orgName: string = session?.user.OrgName!;
  const subDetail: Array<IsubDetail> = await fetchSubscription({ orgId });
  return (
    <div className="m-6">
      <div className='flex'>

        <div className='w-fit pr-10'>
          <div className="text-4xl font-extrabold leading-none tracking-tight">{orgName}</div>
          <div className="text-sm text-gray-400 mb-6">Subscription Models</div>
        </div>

        <AddSub />
      </div>

      <div className="flex flex-row flex-wrap basis-1/3 h-[calc(100vh-110px)] overflow-y-scroll no-scrollbar">
        {subDetail.map((subDetailInd, index: number) => (
          <div key={index} className="border border-white rounded-xl p-7 w-[340px] mr-3 mb-3">
            <div className="text-3xl font-semibold text-center mb-7">{subDetailInd.type}</div>
            <div className="text-center text-slate-300 px-4">Best suited for {subDetailInd.intendedAudience}.
            </div>

            <div className="text-center mt-6">
              <span className="text-5xl font-semibold">
                ${subDetailInd.price}
              </span>
              <span className="text-slate-300">/month</span>
            </div>

            <div className="features mt-5 ">
              <Subfeature subDetail={subDetailInd.features} />
            </div>

            <div className="ml-7">
              <CouponCode couponData={subDetailInd.couponCodes} />
            </div>

            <div className="mt-3 ml-6 grid gap-4 grid-cols-2 w-44">
              <EditSub subdetail={subDetailInd} />
              <DeleteSub subId={ subDetailInd.id } />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}







