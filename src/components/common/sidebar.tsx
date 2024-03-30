"use client";

import {
    LucideIcon,
    LayoutDashboard,
    BadgeDollarSign,
    CircleUserRound,
    Settings,
    WalletCards,
    LogOut,
} from "lucide-react";
import SidebarItem from "./item";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from 'next/link';

interface ISidebarItem {
    name: string;
    path: string;
    icon: LucideIcon;
}

const items: ISidebarItem[] = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Subscriptions",
        path: "/dashboard/subscriptions",
        icon: BadgeDollarSign,
    },
    {
        name: "Docs",
        path: "/dashboard/docs",
        icon: WalletCards,
    },
    {
        name: "Users",
        path: "/dashboard/users",
        icon: CircleUserRound,
    },
    {
        name: "Settings",
        path: "/dashboard/settings",
        icon: Settings,
    },
];

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between top-0 left-0 h-screen w-56 shadow-lg p-4 border-r-2 ">
            <div className="flex flex-col space-y-10 w-full">
                <Link href='/dashboard'><Image
                        src={logo}
                        width={120}
                        // height={90}
                        alt="logo"
                    /></Link>

                <div className="flex flex-col space-y-2">
                    {items.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </div>
                
            </div>
            <div className="flex flex-row justify-around">
                <span className='text-xl '>Nestle</span>
                <span className="mt-1"><LogOut /></span>
            </div>
            
        </div>
    );
};

export default Sidebar;