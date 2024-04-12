'use client'
import { fetchSubscriptionaa } from '@/lib/dashboard/serverMethods';
import React from 'react'

export default function Docs() {
  async function handleClick(){
    const res = await fetchSubscriptionaa();
    console.log(res);
  }
  return (
    <div className='ml-5 mt-5'>
      <div onClick={handleClick}className='text-4xl font-extrabold leading-none tracking-tight bg-red-400'>API Endpoints</div>
    </div>
  )
}
