import Sidebar from "@/components/common/sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen w-full">
            <Sidebar />
            <div> {children} </div>
        </div>)
}