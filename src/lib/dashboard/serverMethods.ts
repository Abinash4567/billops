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

export async function fetchChangedRevenue({ orgId }: { orgId: String }) 
{
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

export async function fetchTotalUsers({ orgId }: { orgId: String }) 
{
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

export async function fetchChangedUsers({ orgId }: { orgId: String }) 
{
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

export async function fetchRetention({ orgId }: { orgId: String }){
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


export async function fetchRetentionChange({ orgId }: { orgId: String }){
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

export async function fetchPotentials({ orgId }: { orgId: String }){
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

export async function fetchPotentialsChange({ orgId }: { orgId: String }){
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