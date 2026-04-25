import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";

export default function Welcome() {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <header className="bg-slate-800 py-3 sm:py-4 px-4 sm:px-10 w-full shadow-md flex items-center justify-between sticky top-0 z-50">
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
                            {/* Services Menu */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-slate-100 hover:!bg-slate-700 hover:!text-white focus:!bg-slate-700 focus:!text-white data-[active]:!bg-slate-700 data-[active]:!text-white data-[state=open]:!bg-slate-700 data-[state=open]:!text-white">
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[250px] gap-1 p-2 bg-slate-800 border-slate-700 rounded-md shadow-lg">
                                        <li>
                                            <NavigationMenuLink href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white text-slate-100 focus:bg-slate-700 focus:text-white">
                                                <div className="font-medium text-white mb-1">Web Development</div>
                                                <p className="text-xs text-slate-400">Build modern web applications</p>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white text-slate-100 focus:bg-slate-700 focus:text-white">
                                                <div className="font-medium text-white mb-1">Mobile Apps</div>
                                                <p className="text-xs text-slate-400">iOS and Android solutions</p>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Resources Menu */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-slate-100 hover:!bg-slate-700 hover:!text-white focus:!bg-slate-700 focus:!text-white data-[active]:!bg-slate-700 data-[active]:!text-white data-[state=open]:!bg-slate-700 data-[state=open]:!text-white">
                                    Resources
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-1 p-2 bg-slate-800 border-slate-700 rounded-md shadow-lg">
                                        <li>
                                            <NavigationMenuLink href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white text-slate-100 focus:bg-slate-700 focus:text-white">
                                                Documentation
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white text-slate-100 focus:bg-slate-700 focus:text-white">
                                                Blog & Articles
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Contact Link */}
                            <NavigationMenuItem>
                                <a href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:!bg-slate-700 hover:!text-white focus:!bg-slate-700 focus:!text-white bg-transparent text-slate-100">
                                    Contact
                                </a>
                            </NavigationMenuItem>

                            {/* Account Menu */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-slate-100 hover:!bg-slate-700 hover:!text-white focus:!bg-slate-700 focus:!text-white data-[active]:!bg-slate-700 data-[active]:!text-white data-[state=open]:!bg-slate-700 data-[state=open]:!text-white">
                                    Account
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-1 p-2 bg-slate-800 border-slate-700 rounded-md shadow-lg">
                                        <li>
                                            <NavigationMenuLink href="/login" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white text-slate-100 focus:bg-slate-700 focus:text-white">
                                                Login
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href="/register" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-white text-slate-100 focus:bg-slate-700 focus:text-white">
                                                Register
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">
                        🚀 MARKAS Assistant
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                        Your ultimate assistant with shadcn/ui components
                    </p>

                    {/* Contoh Komponen shadcn/ui */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                            shadcn/ui Components Demo
                        </h2>

                        <div className="space-y-6">
                            {/* Button Examples */}
                            <div>
                                <p className="text-sm text-slate-500 mb-3">Button Variants:</p>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    <Button variant="default">Default</Button>
                                    <Button variant="destructive">Destructive</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="ghost">Ghost</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                            </div>

                            {/* Switch Example */}
                            <div className="pt-4 border-t border-slate-200">
                                <p className="text-sm text-slate-500 mb-3">Switch Component:</p>
                                <div className="flex items-center justify-center space-x-4">
                                    <Switch
                                        checked={isEnabled}
                                        onCheckedChange={setIsEnabled}
                                    />
                                    <span className="text-slate-700">
                                        Notifications {isEnabled ? "Enabled" : "Disabled"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 justify-center">
                        <Link href="/login">
                            <Button size="lg" className="min-w-[120px]">
                                Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button size="lg" variant="outline" className="min-w-[120px]">
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            Modern Stack
                        </h3>
                        <p className="text-slate-600">
                            Laravel + Inertia + React + shadcn/ui
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            Beautiful UI
                        </h3>
                        <p className="text-slate-600">
                            Professional components ready to use
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            Fully Typed
                        </h3>
                        <p className="text-slate-600">
                            TypeScript for better development
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}