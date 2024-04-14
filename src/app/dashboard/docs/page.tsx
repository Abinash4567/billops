'use client';
import Endpoint from '@/components/common/endpoint';
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function Docs() {
  const [option, setOption] = useState<boolean>(false);
  return (
    <div className='pl-5 pt-5 overflow-y-scroll h-screen no-scrollbar'>
      <div>
          {!option ? (<Button variant="secondary" className='mr-4'>Endpoints</Button>): (<Button onClick={()=>setOption(!option)} variant="outline" className='mr-4'>Endpoints</Button>)}
          {option ? (<Button variant="outline">Webhooks</Button>): (<Button onClick={()=>setOption(!option)} variant="outline">Webhooks</Button>)}
      </div>

      {!option && <Endpoint />}
    </div>
  )
}
