/** @format */
'use client';
import { RevenueData, fetchSales } from "@/lib/dashboard/serverMethods";
import React, { useEffect } from "react";
import {
    BarChart as BarGraph,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Bar
} from "recharts";

// const data = [
//     {
//         name: "Jan",
//         total: 10000
//     },
//     {
//         name: "Feb",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Mar",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Apr",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "May",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Jun",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Jul",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Aug",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Sep",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Oct",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Nov",
//         total: Math.floor(Math.random() * 5000) + 1000
//     },
//     {
//         name: "Dec",
//         total: Math.floor(Math.random() * 5000) + 1000
//     }
// ];

interface IPROPS {
    orgId: string;
}
export default function BarChart({ orgId }: { orgId: string }) {
    const [data, setData] = React.useState<Array<RevenueData>>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchSales({ orgId });
                // console.log(data);
                setData(data);                
                // return data;
            } catch (error) {
                throw new Error("Error fetching Data");
            }
        };

        fetchData();
    }, [orgId]);

    return (
        <ResponsiveContainer
            className="border border-slate-400 p-2 rounded-lg"
            width="50%"
            height={400}
        >
            <BarGraph data={data}>
                <XAxis
                    dataKey={"name"}
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey={"total"} radius={[4, 4, 0, 0]} fill="#7d7b96" />
            </BarGraph>
        </ResponsiveContainer>
    );
}
