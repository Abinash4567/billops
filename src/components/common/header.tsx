'use client';
import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { Link } from "react-scroll/modules";


export default function header() {
  return (
    <div className='flex justify-between border-b-2'>
      <div className='ml-2 mt-6'><Image
                src={logo}
                alt="Description of the image"
                height={45}
            /></div>
      <div className='flex border border-blue-700 rounded-full m-3 '>

        <div className='font-semibold text-sm p-3 m-1 cursor-pointer'><Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link></div>

        <div className='font-semibold text-sm p-3 m-1 cursor-pointer'><Link activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={500}>Pricing</Link></div>

        <div className='font-semibold text-sm p-3 m-1'><a href='/dashboard/docs'>Docs</a></div>

        <div className='font-semibold text-sm p-3 m-1'><a href='/register'>Sign Up</a></div>

      </div>
      <div className='font-semibold text-sm border border-blue-700 self-center p-2 rounded-3xl mr-5 bg-blue-700'><a href='/login'>Start building</a></div>
    </div>
  )
}