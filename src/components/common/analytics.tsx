import { DollarSign, User, UserRoundCog, UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

export default function Analytics() {
    return (
        <div className='mt-8 flex flex-row justify-between'>
            <Card className='border w-64'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign size={20} color="#ffffff" strokeWidth={1.25} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                    </p>
                </CardContent>
            </Card>

            <Card className='border w-64'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Subscription</CardTitle>
                    <User size={20} color="#ffffff" strokeWidth={1.25} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2,000</div>
                    <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                    </p>
                </CardContent>
            </Card>

            <Card className='border w-64'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Retention</CardTitle>
                    <UserRoundPlus size={20} color="#ffffff" strokeWidth={1.25} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">90%</div>
                    <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                    </p>
                </CardContent>
            </Card>

            <Card className='border w-64'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Potentials</CardTitle>
                    <UserRoundCog size={20} color="#ffffff" strokeWidth={1.25} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">892</div>
                    <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
