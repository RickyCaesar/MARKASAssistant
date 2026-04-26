import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export function Header() {
    return (
        <header className="bg-slate-800 py-3 sm:py-4 px-4 sm:px-10 w-full shadow-md flex items-center justify-between sticky top-0 z-50 bg-color-red">
            {/* Header / Navigation Bar */}
            {/* Brand Logo / Name */}
            <div className="text-slate-100 font-bold text-lg sm:text-xl flex-shrink-0">
                MARKAS Assistant
            </div>

                {/* Mobile Menu (Hamburger) */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-slate-100 hover:bg-slate-700 hover:text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px] bg-slate-800 border-slate-700 text-slate-100">
                            <DropdownMenuItem className="focus:bg-slate-700 focus:text-white cursor-pointer">
                                Services
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-slate-700 focus:text-white cursor-pointer">
                                Resources
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-slate-700 focus:text-white cursor-pointer">
                                Contact
                            </DropdownMenuItem>
                            <div className="h-px bg-slate-700 my-1" />
                            <DropdownMenuItem className="focus:bg-slate-700 focus:text-white cursor-pointer" asChild>
                                <Link href="/login" className="w-full">Login</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-slate-700 focus:text-white cursor-pointer" asChild>
                                <Link href="/register" className="w-full">Register</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-2">

                            {/* Login Link */}
                            <NavigationMenuItem>
                                <Link href="/login" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:!bg-slate-700 hover:!text-white focus:!bg-slate-700 focus:!text-white bg-transparent text-slate-100">
                                    Login
                                </Link>
                            </NavigationMenuItem>

                            {/* Register Link */}
                            <NavigationMenuItem>
                                <Link href="/register" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:!bg-slate-700 hover:!text-white focus:!bg-slate-700 focus:!text-white bg-transparent text-slate-100">
                                    Register
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
    );
}