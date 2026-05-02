// resources/js/Layouts/AuthenticatedLayout.tsx
import { PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from '@/components/ui/dialog';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarTrigger,
} from '@/components/ui/sidebar';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function AuthenticatedLayout({
    children
}: PropsWithChildren) {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    return (
        <SidebarProvider>
            <TooltipProvider>
                <Sidebar>
                    <SidebarHeader className="p-4 flex items-center justify-center border-b">
                        <span className="font-bold text-xl text-indigo-600 tracking-tight">MARKAS</span>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Application</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/dashboard">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                                <span>Dashboard</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/features">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                <span>Features</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/pricing">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Pricing</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter className="p-4 text-xs text-center text-slate-500 border-t">
                        &copy; 2026 MARKAS Assistant
                    </SidebarFooter>
                </Sidebar>

                <div className="flex-1 flex flex-col min-h-screen bg-gray-100 overflow-hidden w-full">
                    <nav className="bg-white border-b border-gray-100 flex-shrink-0">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex items-center space-x-4">
                                    <SidebarTrigger className="text-gray-500 hover:text-indigo-600" />
                                    <Link href="/dashboard" className="text-xl font-bold text-indigo-600 hidden sm:block">
                                        🚀 MARKAS Assistant
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {user ? (
                                        <>
                                            <span className="text-gray-700">{user.name}</span>
                                            <Dialog>
                                                <DialogTrigger className="text-red-600 hover:text-red-800 font-medium">
                                                    Logout
                                                </DialogTrigger>
                                                <DialogContent className="rounded-sm">
                                                    <DialogHeader>
                                                        <DialogTitle>Konfirmasi Logout</DialogTitle>
                                                        <DialogDescription>
                                                            Apakah Anda yakin ingin keluar dari aplikasi? Anda harus login kembali untuk mengakses dashboard.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button variant="outline">Batal</Button>
                                                        </DialogClose>
                                                        <Link
                                                            href="/logout"
                                                            method="post"
                                                            as="button"
                                                            className="bg-red-600 text-white px-4 py-2 text-sm rounded-md hover:bg-red-700 font-medium transition-colors"
                                                        >
                                                            Ya, Keluar
                                                        </Link>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/login" className="text-gray-700 hover:text-indigo-600">
                                                Login
                                            </Link>
                                            <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </TooltipProvider>
        </SidebarProvider>
    );
}