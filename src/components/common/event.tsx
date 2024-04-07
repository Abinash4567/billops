import React from 'react'
import { IEventDetail } from '../../../types/next-auth';

// amount: number;
//     accoutCreation: number;
//     createdAt: Date;
//     id: string;
//     status: string;
//     plan: string;

function Event(props: IEventDetail) {
    return (
        <div className="rounded-lg bg-slate-900 mt-2 p-1 border-slate-500 border">
        <div className="text-slate-300 text-sm">Order Id:  <span className="text-white font-medium">  {props.id}</span></div>
        <div className="text-slate-300 text-sm">Processed at:<span className="text-white font-medium">  {props.createdAt.toLocaleString().replace('-', '/').split('T')[0].replace('-', '/')}</span></div>
        <div className="text-slate-300 text-sm">Amount:<span className="text-white font-medium">  {props.amount}</span></div>
        <div className="text-slate-300 text-sm">Status:<span className="text-white font-medium">  {props.status}</span></div>
        <div className="text-slate-300 text-sm">Plan:<span className="text-white font-medium">  {props.plan}</span></div>
        </div>
    )
}

export default Event;