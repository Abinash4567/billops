import Env from "@/config/env";
export async function fetchRevenue({orgId}:{orgId:String})
{
    const res = await fetch(`${Env.APP_URL}/dashboard/totalRevenue`);
}