import React from 'react'
import Subscription from './subscription'

function plans() {
  return (
    <>
    <div className='font-semibold text-3xl text-center mt-10' id='pricing'>Predictable pricing, designed to scale</div>
    <div className='text-sm font-semibold text-center mt-2 text-slate-400 mb-8'>Start building for free, collaborate with a team, then scale to millions of users.</div>
    <div className='mx-12'><Subscription/></div>
    </>
  )
}

export default plans