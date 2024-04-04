import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'

export default function Subscriptions() {
  return (
    <>
    <div className='mt-7 ml-5 text-4xl font-extrabold leading-none tracking-tight text-slate-300'><span className="text-blue-600">Nestle&apos;s</span> Subscription Model</div>
    <div className="mt-10 ml-5 flex flex-row flex-wrap w-[calc(100vw-224px)]"> 

        <div className='border border-white rounded-xl h-fit p-7 bg-slate-800 m-5'>
          <div className='text-3xl font-semibold text-center mb-7'>Starter</div>
          <div className='text-xl mt-4'><Button>Edit</Button></div>
        </div>

        <div className='border border-white rounded-xl h-fit p-7 bg-slate-800 m-5'>
          <div className='text-3xl font-semibold text-center mb-7'>Starter</div>
          <div className='text-xl mt-4'><Button>Edit</Button></div>
        </div>

        <div className='border border-white rounded-xl h-fit p-7 bg-slate-800 m-5'>
          <div className='text-3xl font-semibold text-center mb-7'>Starter</div>
          <div className='text-xl mt-4'><Button>Edit</Button></div>
        </div>

        <div className='border border-white rounded-xl h-fit p-7 bg-slate-800 m-5'>
          <div className='text-3xl font-semibold text-center mb-7'>Starter</div>
          <div className='text-xl mt-4'><Button>Edit</Button></div>
        </div>

        <div className='border border-white rounded-xl h-fit p-7 bg-slate-800 m-5'>
          <div className='text-3xl font-semibold text-center mb-7'>Starter</div>
          <div className='text-xl mt-4'><Button>Edit</Button></div>
        </div>

        <div className='border border-white rounded-xl h-fit p-7 bg-slate-800 m-5'>
          <div className='text-3xl font-semibold text-center mb-7'>Starter</div>
          <div className='text-xl mt-4'><Button>Edit</Button></div>
        </div>

      </div>
    </>
    
  )
}
