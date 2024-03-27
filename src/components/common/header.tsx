
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';


export default function header() {
  return (
    <div className='flex justify-between bg-black border-b-2'>
      <div className='ml-2 mt-6'><Image
                src={logo}
                alt="Description of the image"
                height={45}
            /></div>
      <div className='flex border border-blue-700 rounded-full m-3 '>
        <div className='font-semibold text-sm p-3 m-1'><Link href='#'>Services</Link></div>
        <div className='font-semibold text-sm p-3 m-1'><Link href='#'>Pricing</Link></div>
        <div className='font-semibold text-sm p-3 m-1'><Link href='#'>Docs</Link></div>
        <div className='font-semibold text-sm p-3 m-1'><Link href='#'>Contact us</Link></div>
      </div>
      <div className='font-semibold text-sm border border-blue-700 self-center p-2 rounded-3xl mr-5 bg-blue-700'><Link href='#'>Start building</Link></div>
    </div>
  )
}