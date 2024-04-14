'use client';
import Endpoint from '@/components/common/endpoint';
import Webhook from '@/components/common/webhook';
// import Syntax from '@/components/common/syntax';
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function Docs() {
  const [option, setOption] = useState<boolean>(false);
  return (
    <div className='pl-5 pt-5 overflow-y-scroll h-screen no-scrollbar w-[calc(100vw-350px)]'>
      <div>
          {!option ? (<Button variant="secondary" className='mr-4'>Endpoints</Button>): (<Button onClick={()=>setOption(!option)} variant="outline" className='mr-4'>Endpoints</Button>)}
          {option ? (<Button variant="outline">Webhooks</Button>): (<Button onClick={()=>setOption(!option)} variant="outline">Webhooks</Button>)}
      </div>

      {!option ? <Endpoint /> : <Webhook/>}

      {/* <Syntax/> */}
    </div>
  )
}