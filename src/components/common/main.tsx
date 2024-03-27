import React from 'react'
import Image from 'next/image';
import backgroundImage from "../../../public/background.jpeg"

function main() {
    return (
        <div className='flex'>
            <div className='w-1/2 text-7xl mt-24 ml-28 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                <div>Business</div>
                <div>Essentials</div>
                <div>Simplified</div>
                <div className='text-white w-96 mt-2 font-semibold text-sm'>Effortlessly manage all your bills and subscriptions in one place. Save time, money, and gain peace of mind. Simplify Your Billing & Subscriptions - Take Control Today!</div>
            </div>
            
            <div className='w-1/2 m-14'>
            <Image
                className='rounded-xl'
                src={backgroundImage}
                alt="Description of the image"
                height={500}
            />
            </div>
        </div>
    )
}

export default main