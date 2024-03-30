"use client";
import { useMemo } from "react";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";


interface ISidebarItem {
    name: string;
    path: string;
    icon: LucideIcon;
}

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
    const { name, icon: Icon, path } = item;
    const pathname = usePathname();

    const isActive = useMemo(() => {

        return path === pathname;
    }, [path, pathname]);

    return (
            <div className={`flex items-center p-3 rounded-lg hover:bg-slate-800 cursor-pointer hover:font-semibold justify-between ${isActive && "text-sidebar-active bg-sidebar-background"}`}>
                    <Link href={path}>
                        <div className="flex items-center space-x-2">
                            <Icon size={20} />
                            <p className="text-sm font-semibold">{name}</p>
                        </div>
                    </Link>
                    
            </div>
    );
};

export default SidebarItem;