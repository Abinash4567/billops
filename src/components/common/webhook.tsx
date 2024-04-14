import React from 'react'

function Webhook() {
    return (
        <div>
            <div className="text-2xl font-bold mt-6">
                Verify Payment on Capture
                <span className="text-xl text-blue-400 font-semibold ml-10">POST</span>
                <span className="font-normal text-base">/api/v1/verifypayment</span>
            </div>

            <div className="text-lg mt-4 font-semibold p-1 border-b-2">
                Request body
            </div>

            <div className="mt-4">
                <span className="font-semibold text-lg text-slate-300">userId</span>{" "}
                <span className="text-sm ml-5 font-semibold text-slate-500">
                    string
                </span>{" "}
                <span className="text-red-400 text-xs ml-5">REQUIRED</span>
            </div>

            <div className="text-sm mt-2 text-slate-400 border-b-[1px] pb-4">
                User Id acts like unique identifier for your subscription platform.
            </div>

            <div className="mt-4">
                <span className="font-semibold text-lg text-slate-300">planId</span>{" "}
                <span className="text-sm ml-5 font-semibold text-slate-500">Int</span>{" "}
                <span className="text-red-400 text-xs ml-5">REQUIRED</span>
            </div>

            <div className="text-sm mt-2 text-slate-400 border-b-[1px] pb-4">
                Plan Id differs accoring to Organization and plans you have created. You
                can fetch plan Id from API endpoint{" "}
                <span className="text-white">api/v1/subdetail</span>/
            </div>

            <div className="text-lg mt-10 font-semibold p-1 border-b-2">
                Response Fields
                <span className="text-sm text-blue-400 font-semibold ml-10">
                    status code: 200
                </span>
            </div>

            <div className='mt-2 text-sm text-slate-400'>message: &quot;Captured&quot;</div>
        </div>
    );
}

export default Webhook;