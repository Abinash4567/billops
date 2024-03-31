import React from 'react'
import Link from 'next/link'
import { Home, Mail, User } from 'lucide-react'

export default function Users() {
  return (
    <>
      <div className='mt-7 ml-5 text-4xl font-extrabold leading-none tracking-tight text-slate-300'><span className="text-blue-600">Nestle&apos;s</span> Users</div>
   
      <div className='grid grid-flow-col justify-stretch w-[calc(100vw-224px)] mt-10 ml-5 border border-slate-400 rounded-md p-3'>

        <div className='justify-stretch text-xs text-slate-300 font-semibold leading-relaxed'>
          <div>Customer Id: <Link href='#' className='text-sm text-blue-500 underline underline-offset-1'>efhhudhb</Link></div>
          <div className='flex'>Subscription(s):<div className='bg-green-400 w-12 text-center rounded-md ml-3 text-white'>Active</div></div>
          <div className='flex'>Merchant: <div className='ml-3'>Razorpay</div></div>
        </div>


        <div className='text-xs font-semibold text-slate-300 leading-relaxed'>
          <div className='flex'><User size={20} color="#b0abab" strokeWidth={1.5} /><span className='ml-2'>Abinash Ray Yadav</span></div>
          <div className='flex'><Home size={18} color="#b0abab" strokeWidth={1.5} /><span className='ml-2'>Sarlhai</span></div>
          <div className='flex'><Mail size={18} color="#b0abab" strokeWidth={1.5} /><span className='ml-2'>abinash@gmail.com</span></div>
        </div>


        <div className='text-xs font-semibold text-slate-300 leading-relaxed'>
          <div>Created At: 24-Oct</div>
          <div>Expires At: 24-Oct</div>
          <div>Net Payment: USD 23</div>
        </div>
      </div>
    </>

  )
}
