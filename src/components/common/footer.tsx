import React from 'react'
import Link from 'next/link'

function footer() {
  return (
    <div className='flex justify-between mt-11 text-slate-600 mb-4'>
        <div className='font-semibold ml-10'>©2024 Copyright</div>
        <div className='flex justify-end'>
            <div className='pr-12'><Link href='#'>Github</Link></div>
            <div className='pr-12'><Link href='#'>Contact</Link></div>
        </div>
        
    </div>
  )
}

export default footer