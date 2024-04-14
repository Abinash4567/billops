'use client';

import React, { useEffect } from 'react'
import { fetchUsers } from '@/lib/dashboard/serverMethods';
import { useSession } from 'next-auth/react';
import Userlist from '@/components/common/userlist';
import { userDetail } from '@/app/api/users/route';


export default function Users() {
  const { data: session } = useSession();
  const orgId: string = session?.user.id!;
  const [data, setData] = React.useState<userDetail[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dat = await fetchUsers({ orgId });
        // console.log(dat);
        setData(dat);
      } catch (error) {
        throw new Error("Error fetching Data");
      }
    };

    fetchData();
  }, [orgId]);
  return (
    <>
      <div className="mt-7 ml-5 text-4xl font-extrabold leading-none tracking-tight text-slate-300">
        <span className="text-blue-600">{session?.user.OrgName}&apos;s</span> Users
      </div>
      <div className=''>
        {data.map((d, i) => (
              <Userlist
                key={i}
                userId={d.userId}
                name={d.name}
                email={d.email}
                planExpiry={d.planExpiry}
                createdAt={d.createdAt}
                trans={d.trans}
                totalTransactionAmount={d.totalTransactionAmount}
              />
            ))}
        </div>
    </>
  );
}
