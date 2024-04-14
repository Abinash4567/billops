import React from 'react'
import { BellDot, Cable, Mail, ReceiptEuro, ReceiptText, TicketPercent } from 'lucide-react';

function section() {
    return (
        <>
            <div className='ml-28 mr-20 pb-5' id='services'>
                <span className='text-5xl font-bold'>Sign up & </span>
                <span className='text-4xl text-slate-400 leading-relaxed'> Everything you need to bring your business to the next level.</span>

                <div className='ml-24 mt-3 grid grid-rows-2 grid-flow-col gap-y-12'>

                    <div className='card border border-white w-60 rounded-2xl p-4'>
                        <div><ReceiptText size={35} strokeWidth={0.9}/></div>
                        <div className='font-bold mt-1'>Subscriptions</div>
                        <div className='text-sm text-slate-500 mt-1'>Multiple Subscription models as you wish.</div>
                    </div>

                    <div className='card border border-white w-60 rounded-2xl p-4'>
                        <div><TicketPercent size={35} strokeWidth={0.75} /></div>
                        <div className='font-bold mt-1'>Coupons</div>
                        <div className='text-sm text-slate-500 mt-1'>Manage Coupon code on your fingertips.</div>
                    </div>

                    <div className='card border border-white w-60 rounded-2xl p-4'>
                        <div><Mail strokeWidth={0.75} size={35}/></div>
                        <div className='font-bold mt-1'>Email Notifications</div>
                        <div className='text-sm text-slate-500 mt-1'>Stay connected to your Customer.</div>
                    </div>

                    <div className='card border border-white w-60 rounded-2xl p-4'>
                        <div><Cable strokeWidth={0.75} size={35}/></div>
                        <div className='font-bold mt-1'>Integrations</div>
                        <div className='text-sm text-slate-500 mt-1'>MIntegrate with any payment service you like.</div>
                    </div>

                    <div className='card border border-white w-60 rounded-2xl p-4'>
                        <div><BellDot strokeWidth={0.75} size={35}/></div>
                        <div className='font-bold mt-1'>Reminders</div>
                        <div className='text-sm text-slate-500 mt-1'>Have reminder for refunds, subscription changes.</div>
                    </div>

                    <div className='card border border-white w-60 rounded-2xl p-4'>
                        <div><ReceiptEuro strokeWidth={0.75} size={35}/></div>
                        <div className='font-bold mt-1'>Invoices</div>
                        <div className='text-sm text-slate-500 mt-1'>Generate invoices as you wish and as you like.</div>
                    </div>
                </div>
            </div>

                
        </>
    )
}

export default section