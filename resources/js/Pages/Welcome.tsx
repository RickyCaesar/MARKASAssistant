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
import { useState } from "react";

export default function Welcome() {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <header className="bg-slate-800 py-4 px-10 w-full shadow-md flex items-center justify-start">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent text-slate-100 hover:!bg-slate-700 hover:!text-white focus:!bg-slate-700 focus:!text-white data-[active]:!bg-slate-700 data-[active]:!text-white data-[state=open]:!bg-slate-700 data-[state=open]:!text-white text-base">
                                MARKAS Assistant
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