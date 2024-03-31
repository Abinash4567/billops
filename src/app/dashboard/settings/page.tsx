import { Button } from '@/components/ui/button'
import React from 'react'

export default function settings() {
  return (
    <div className="bg-slat-800 border border-slate-800 w-[calc(100vw-240px)] h-screen pt-5 pl-5">
      <div className='text-4xl font-extrabold text-slate-300'>Settings</div>

      <div className='mt-5 text-slate-400'>Name: <span className='font-semibold text-lg tracking-wide text-white'>Nestle</span></div>

      <div className='mt-2 text-slate-400'>Address: <span className='font-semibold text-lg tracking-wide text-white'>Nestle</span></div>

      <div className='mt-2 text-slate-400'>Email: <span className='font-semibold text-lg tracking-wide text-white'>Nestle</span></div>

      <div className='mt-2 text-slate-400'>API Key: <span className='font-semibold text-lg tracking-wide text-white'>Nestle</span><Button size='sm' className='ml-3 font-medium text-lg'>New</Button></div>

      <Button size='sm' className='font-normal text-lg mt-10'>verify Payment</Button>

    </div>
  )
}
