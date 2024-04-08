import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { Button } from '@/components/ui/button';
import { Session, getServerSession } from 'next-auth';
import React from 'react'
import { fetchSubscription } from '@/lib/dashboard/serverMethods';
import Subfeature from '@/components/common/subfeature';
import CouponCode from '@/components/common/couponCode';
import  EditSub  from '@/components/common/editSub';

export default async function Subscriptions() {
  const session: Session | null = await getServerSession(authOptions);
  const orgId: string = session?.user.id!;
  const orgName: string = session?.user.OrgName!;
  const subDetail = await fetchSubscription({orgId});
  // console.log(subDetail);
  return (
    <div className=' m-6'>
      <div className='text-4xl font-extrabold leading-none tracking-tight'>{orgName}</div>
      <div className='text-sm text-gray-400 mb-6'>Subscription Models</div>

      <div className='grid grid-cols-3 gap-3 overflow-y-auto h-[calc(100vh-110px)]'>
        <div className='border border-white rounded-xl h-fit p-7 w-[350px]'>
          <div className='text-3xl font-semibold text-center mb-7'>{subDetail[0].type}</div>
          <div className='text-center text-slate-300 px-4'>Best suited for {subDetail[0].intendedAudience}.</div>
          <div className='text-center mt-6'><span className='text-5xl font-semibold'>${subDetail[0].price}</span><span className='text-slate-300'>/month</span></div>

          <div className='features mt-5 '>
            <Subfeature subDetail= {subDetail[0].features} />
          </div>

          <div className='ml-7'>
          <CouponCode couponData={subDetail[0].couponCodes}/>
          </div>

        <div className='text-xl ml-16 mt-4'><EditSub subdetail= {subDetail[0]}/></div>
      </div>
    </div>
    </div>
  )
}
