import { DollarSign, User, UserRoundCog, UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { fetchRevenue, fetchChangedRevenue, fetchTotalUsers, fetchChangedUsers, fetchRetention, fetchRetentionChange, fetchPotentials, fetchPotentialsChange } from '@/lib/dashboard/serverMethods';

interface IPROPS{
    orgId: string;
}

export default async function Analytics( { orgId }: IPROPS ) {
    const totalRevenue = await fetchRevenue( { orgId } );
    const changedRevenue = await fetchChangedRevenue( { orgId } );
    const totalUsers = await fetchTotalUsers( { orgId });
    const changedUsers = await fetchChangedUsers( { orgId});
    const retention = await fetchRetention( { orgId } );
    const retentionChange = await fetchRetentionChange( { orgId });
    const potentials = await fetchPotentials( { orgId});
    const potentialsChange = await fetchPotentialsChange( { orgId });
    return (
        <div className='mt-8 flex flex-row justify-between'>
            <Card className='border w-64 border-slate-400'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign size={20} color="#ffffff" strokeWidth={1.25} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">${totalRevenue}</div>
                    { changedRevenue > 0 ? (<p className="text-xs text-green-500">
                        +{changedRevenue}% from last month  </p>) : (<p className="text-xs text-red-500">
                        {changedRevenue}% from last month </p>)}
                    
                </CardContent>
            </Card>

            <Card className='border w-64 border-slate-400'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Subscription</CardTitle>
                    <User size={20} color="#ffffff" strokeWidth={1.25} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{totalUsers}</div>
                    { changedUsers > 0 ? (<p className="text-xs text-green-500">
                        +{changedUsers}% from last month  </p>) : (<p className="text-xs text-red-500">
                        {changedUsers}% from last month </p>)}
                </CardContent>
            </Card>

            <Card className='border w-64 border-slate-400'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Retention</CardTitle>
                    <UserRoundPlus size={20} color="#ffffff" strokeWidth={1.25} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{retention}%</div>
                    { retentionChange > 0 ? (<p className="text-xs text-green-500">
                        +{retentionChange} users from last month  </p>) : (<p className="text-xs text-red-500">
                        {retentionChange} users from last month </p>)}
                </CardContent>
            </Card>

            <Card className='border w-64 border-slate-400'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Potentials</CardTitle>
                    <UserRoundCog size={20} color="#ffffff" strokeWidth={1.25} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{potentials}</div>
                    { potentialsChange > 0 ? (<p className="text-xs text-red-500">
                        +{potentialsChange} users from last month  </p>) : (<p className="text-xs text-gren-500">
                        {potentialsChange} users from last month </p>)}
                </CardContent>
            </Card>
        </div>
    )
}
