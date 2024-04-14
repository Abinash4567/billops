import { userDetail } from "@/app/api/users/route";
import { SalesProps } from "@/components/common/sales";
import Env from "@/config/env";

export async function fetchRevenue({ orgId }: { orgId: String }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/totalRevenue`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response?.amount;
}

export async function fetchChangedRevenue({ orgId }: { orgId: String }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/revenueChange`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response?.amount;
}

export async function fetchTotalUsers({ orgId }: { orgId: String }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/usersCount`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    // console.log(res);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response?.amount;
}

export async function fetchChangedUsers({ orgId }: { orgId: String }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/usersChange`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    // console.log(res);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response?.numbers;
}

export async function fetchRetention({ orgId }: { orgId: String }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/retention`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    // console.log(res);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response?.numbers;
}


export async function fetchRetentionChange({ orgId }: { orgId: String }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/changedRetention`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    // console.log(res);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response?.numbers;
}

export async function fetchPotentials({ orgId }: { orgId: String }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/potentials`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    // console.log(res);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response?.numbers;
}

export async function fetchPotentialsChange({ orgId }: { orgId: String }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/changedPotentials`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    // console.log(res);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response?.numbers;
}


export async function fetchTranscation({ orgId }: { orgId: string }) {
    const res = await fetch(`${Env.APP_URL}/api/dashboard/recentSale`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orgId: orgId
        })
    })
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    // console.log(response.data);
    return [response?.data, response?.size];
}


export function refineData(data: { amount: number; user: { name: string; email: string } }[]): SalesProps[] {
    return data.map((item) => ({
        name: item.user.name,
        email: item.user.email,
        saleAmount: item.amount.toString(),
    }));
}

export type RevenueData = {
    name: string,
    total: number
}
export async function fetchSales({ orgId }: { orgId: string }): Promise<Array<RevenueData>> {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    let ans = new Array();

    for (let i = 0; i < 12; i++) {
        let mmonth = (month - i) >= 0 ? (month - i) : (month - i) + 12;
        let yyear = (month - i) >= 0 ? year : year + 1;
        let monthName: string = new Date(yyear, mmonth).toLocaleString('default', { month: 'long' }).substring(0, 3);
        const res = await fetch(`${Env.APP_URL}/api/dashboard/revenueByMonth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orgId: orgId,
                startDate: new Date(yyear, mmonth, 1),
                endDate: new Date(yyear, mmonth, 31)
            })
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const response = await res.json();
        // console.log(response);
        ans.push({ name: monthName, total: response?.amount });
        // console.log(response?.amount);
    }
    return ans;
}

export async function fetchUsers({
    orgId,
}: {
    orgId: string;
}): Promise<Array<userDetail>> {
    const res = await fetch(`${Env.APP_URL}/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orgId,
        }),
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    // console.log(response.data);
    return response?.data;
}

export async function fetchUserDetail(userId: string) {
    const res = await fetch(`${Env.APP_URL}/api/userdetail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
        },
        body: JSON.stringify({
            userId,
        }),
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    // console.log(response);
    return response?.data;
}




export async function fetchSubscription({ orgId }: { orgId: string })
{
    const res = await fetch(`${Env.APP_URL}/api/dashboard/subscription`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orgId,
        }),
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    // console.log(response.data);
    return response?.data;
}

export async function fetchSubscriptionaa()                  //Testing
{
    const res = await fetch(`${Env.APP_URL}/api/v1/userdetail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "uz-&qYPKjy"
        },
        body: JSON.stringify({
            orgId: 1,
            userId: "user1"
        }),
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    // console.log(response);
    return response;
}


export async function setAPIKey({orgId, key}: {orgId: number, key: string}){
    const res = await fetch(`${Env.APP_URL}/api/dashboard/setapi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orgId: orgId,
            key: key
        }),
    });
    if (!res.ok) {
        throw new Error("Failed to make changes");
    }
    const response = await res.json();
    // console.log(response);
    return response;
}