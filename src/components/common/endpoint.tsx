import React from 'react'

function Endpoint() {
    return (
        <div>
            <div className="text-2xl font-bold mt-6">
                Fetch Subscription Data
                <span className="text-xl text-blue-400 font-semibold ml-10">POST</span>
                <span className="font-normal text-base">/api/v1/subdetail</span>
            </div>

            <div className="text-lg mt-4 font-semibold p-1 border-b-2">Request body
            </div>
            
            <div className='mt-4'><span className='font-semibold text-lg text-slate-300'>orgId</span> <span className='text-sm ml-5 font-semibold text-slate-500'>Int</span> <span className='text-red-400 text-xs ml-5'>REQUIRED</span></div>

            <div className='text-sm mt-2 text-slate-400 border-b-[1px] pb-4'>Organization Key acts like unique key to identify your organization which is to be passed inside body. To see your organization key, head over to setting under dashboard.</div>

            <div className='mt-4'><span className='font-semibold text-lg text-slate-300'>API Key</span> <span className='text-sm ml-5 font-semibold text-slate-500'>string</span> <span className='text-red-400 text-xs ml-5'>REQUIRED</span></div>

            <div className='text-sm mt-2 text-slate-400 border-b-[1px] pb-4'>API key is high security string which protects endpoint from misuse. Every organization registered under billops has unique one and can be regenerated according to your requirement. It is fired under header section.
            </div>

            <div className="text-lg mt-10 font-semibold p-1 border-b-2">Response Fields<span className="text-sm text-blue-400 font-semibold ml-10">status code: 200</span></div>

            <div className='mt-4'><span className='text-lg text-slate-300'>id</span> <span className='text-sm ml-40 font-semibold text-slate-500'>int</span></div> 
            
            <div className='mt-1'><span className='text-slate-300'>type</span> <span className='text-sm ml-36 font-semibold text-slate-500'>string</span></div> 

            <div className='mt-1'><span className=' text-slate-300'>intendedAudience</span> <span className='text-sm ml-10 font-semibold text-slate-500'>string</span></div> 

            <div className='mt-1'><span className=' text-slate-300'>price</span> <span className='text-sm ml-36 font-semibold text-slate-500'>int</span></div> 

            <div className='mt-1'><span className=' text-slate-300'>features</span> <span className='text-sm ml-28 font-semibold text-slate-500'>JSON</span></div> 

            <div className='mt-1'><span className=' text-slate-300'>couponCodes</span> <span className='text-sm ml-16 font-semibold text-slate-500'>JSON</span></div> 


            <div className="text-lg mt-10 font-semibold p-1 border-b-2">Error descriptions</div>
            
            <div className='flex text-sm border border-slate-500 rounded-xl p-4 mt-5'>
                <div className='w-40'>
                    <div className='font-semibold'>404</div>
                    <div>Bad Request</div>
                </div>

                <div>
                    <div>Invalid Organization Id or API key</div>
                    <div>The provided organization id or API key didn&apos;t match any registered organization.</div>
                </div>

            </div>

            <div className='flex text-sm border border-slate-500 rounded-xl p-4 mt-5'>
                <div className='w-40'>
                    <div className='font-semibold'>500</div>
                    <div>Bad Request</div>
                </div>

                <div>
                    <div>Internal Server Error</div>
                    <div>It&apos;s not you. It&apos; just from our end.</div>
                </div>

            </div>

            <div className="text-2xl font-bold mt-12">
                Fetch User Data
                <span className="text-xl text-blue-400 font-semibold ml-10">POST</span>
                <span className="font-normal text-base">/api/v1/userdetail</span>
            </div>

            <div className="text-lg mt-4 font-semibold p-1 border-b-2">Request body
            </div>
            
            <div className='mt-4'><span className='font-semibold text-lg text-slate-300'>orgId</span> <span className='text-sm ml-5 font-semibold text-slate-500'>Int</span> <span className='text-red-400 text-xs ml-5'>REQUIRED</span></div>

            <div className='text-sm mt-2 text-slate-400 border-b-[1px] pb-4'>Organization Key acts like unique key to identify your organization which is to be passed inside body. To see your organization key, head over to setting under dashboard.</div>

            <div className='mt-4'><span className='font-semibold text-lg text-slate-300'>API Key</span> <span className='text-sm ml-5 font-semibold text-slate-500'>string</span> <span className='text-red-400 text-xs ml-5'>REQUIRED</span></div>

            <div className='text-sm mt-2 text-slate-400 border-b-[1px] pb-4'>API key is high security string which protects endpoint from misuse. Every organization registered under billops has unique one and can be regenerated according to your requirement. It is fired under header section.
            </div>

            <div className='mt-4'><span className='font-semibold text-lg text-slate-300'>User Id</span> <span className='text-sm ml-5 font-semibold text-slate-500'>string</span> <span className='text-red-400 text-xs ml-5'>REQUIRED</span></div>

            <div className='text-sm mt-2 text-slate-400 border-b-[1px] pb-4'>userId is unique user registered in your organization.</div>





            <div className="text-lg mt-10 font-semibold p-1 border-b-2">Response Fields<span className="text-sm text-blue-400 font-semibold ml-10">status code: 200</span></div>

            <div className='mt-4'><span className='text-lg text-slate-300'>id</span> <span className='text-sm ml-20 font-semibold text-slate-500'>int</span></div> 
            
            <div className='mt-1'><span className='text-slate-300'>name</span> <span className='text-sm ml-12 font-semibold text-slate-500'>string</span></div> 

            <div className='mt-1'><span className=' text-slate-300'>email</span> <span className='text-sm ml-12 font-semibold text-slate-500'>string</span></div> 

            <div className='mt-1'><span className=' text-slate-300'>planExpiry</span> <span className='text-sm ml-3 font-semibold text-slate-500'>Date</span></div> 

            <div className='mt-1'><span className=' text-slate-300'>planType</span> <span className='text-sm ml-4 font-semibold text-slate-500'>string</span></div> 

            <div className="text-lg mt-10 font-semibold p-1 border-b-2">Error descriptions</div>
            
            <div className='flex text-sm border border-slate-500 rounded-xl p-4 mt-5'>
                <div className='w-40'>
                    <div className='font-semibold'>404</div>
                    <div>Bad Request</div>
                </div>

                <div>
                    <div>Invalid Organization Id or userId or API key</div>
                    <div>The provided organization id or API key or userId didn&apos;t match any registered credentials.</div>
                </div>

            </div>

            <div className='flex text-sm border border-slate-500 rounded-xl p-4 mt-5 mb-32'>
                <div className='w-40'>
                    <div className='font-semibold'>500</div>
                    <div>Bad Request</div>
                </div>

                <div>
                    <div>Internal Server Error</div>
                    <div>It&apos;s not you. It&apos; just from our end.</div>
                </div>

            </div>

        </div>

    );
}

export default Endpoint;