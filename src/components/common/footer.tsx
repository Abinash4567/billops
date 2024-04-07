import React from 'react'
import Link from 'next/link'
import { Code } from 'lucide-react'

function footer() {
  return (
    <div className='flex text-slate-500 mt-10 justify-center'>
        <span className='font-semibold'>©2024 Copyright</span>

        <span className='font-semibold text-white ml-6'>
          <Link href='https://github.com/Abinash4567/billops'>
            <div className='flex'>
              <Code size={22} color="#ffffff" strokeWidth={2} />
              <span>Github</span>
            </div>
          </Link>
        </span>
        
    </div>
  )
}

export default footer