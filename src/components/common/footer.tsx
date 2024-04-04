import React from 'react'
import Link from 'next/link'
import { Github } from 'lucide-react'

function footer() {
  return (
    <div className='flex text-slate-500 mt-10 justify-center'>
        <span className='font-semibold'>©2024 Copyright</span>

        <span className='font-semibold text-white ml-6'>
          <Link href='#'>
            <div className='flex'>
              <Github size={22} color="#ffffff" strokeWidth={2.5} />
              <span>Github</span>
            </div>
          </Link>
        </span>
        
    </div>
  )
}

export default footer