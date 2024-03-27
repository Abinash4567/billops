import React from 'react'
import Image from 'next/image'
import paypal from '../../../public/paypal.png';
import razoprpay from '../../../public/razorpay.png';
import stripe from '../../../public/stripe.png';
import amazonpay from '../../../public/amazon.png';
import applepay from '../../../public/apple.png';

export default function Trusted() {
  return (
    <>
    <div className='text-xl font-medium text-center mt-10 mb-4'>Supports all payment merchant</div>
    <div className='flex ml-[450px]'>
    <Image className='rounded-2xl border mr-7' src={paypal} alt="Description of the image" width={70}/>
    <Image className='rounded-2xl border mr-7' src={razoprpay} alt="Description of the image" width={70}/>
    <Image className='rounded-2xl border mr-7' src={stripe} alt="Description of the image" width={70}/>
    <Image className='rounded-2xl border mr-7' src={amazonpay} alt="Description of the image" width={70}/>
    <Image className='rounded-2xl border mr-7' src={applepay} alt="Description of the image" width={70}/>
    </div>
    </>
  )
}
