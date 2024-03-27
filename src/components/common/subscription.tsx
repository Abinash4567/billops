import React from 'react'
import { Button } from '../ui/button'
import { Check } from 'lucide-react'

function subscription() {
  return (
    <div className='flex justify-evenly'>


    <div className='border border-white rounded-xl h-fit p-7 w-[400px]'>
        <div className='text-3xl font-semibold text-center mb-7'>Starter</div>
        <div className='text-center text-slate-300 px-4'>Best suited for Personal and Educational Purpose project.</div>
        <div className='text-center mt-6'><span className='text-5xl font-semibold'>$49</span><span className='text-slate-300'>/month</span></div>

        <div className='features mt-5 '>
            <div className='flex mx-7'><Check color="#0ecd11" />No setup, or hidden fees</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Team size: 1 developer</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Premium support: 6 months</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />updates: 6 months</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Free updates: 6 months</div>
        </div>

    <div className='text-xl ml-16 mt-4'><Button>Get Started</Button></div>
    </div>

    <div className='border border-white rounded-xl h-fit p-7 w-[400px]'>
        <div className='text-3xl font-semibold text-center mb-7'>Company</div>
        <div className='text-center text-slate-300 px-4'>Relevant for multiple users, extended & premium support.</div>
        <div className='text-center mt-6'><span className='text-5xl font-semibold'>$199</span><span className='text-slate-300'>/month</span></div>

        <div className='features mt-5 '>
            <div className='flex mx-7'><Check color="#0ecd11" />No setup, or hidden fees</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Team size: 10 developer</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Premium support: 24 months</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />updates: 24 months</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Free updates: 24 months</div>
        </div>

        <div className='text-xl ml-16 mt-4'><Button>Get Started</Button></div>
    </div>


    <div className='border border-white rounded-xl h-fit p-7 w-[400px]'>
        <div className='text-3xl font-semibold text-center mb-7'>Enterprise</div>
        <div className='text-center text-slate-300 px-4'>Best for large scale uses and extended redistribution rights.</div>
        <div className='text-center mt-6'><span className='text-5xl font-semibold'>$499</span><span className='text-slate-300'>/month</span></div>

        <div className='features mt-5 '>
            <div className='flex mx-7'><Check color="#0ecd11" />No setup, or hidden fees</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Team size: 100+ developer</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Premium support: 36 months</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />updates: 36 months</div>
            <div className='flex mx-7 mt-3'><Check color="#0ecd11" />Free updates: 36 months</div>
        </div>

        <div className='text-xl ml-16 mt-4'><Button>Get Started</Button></div>
    </div>


    </div>
  )
}

export default subscription