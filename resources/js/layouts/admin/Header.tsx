import { useState, useRef } from "react";
import { Head, Link, usePage } from "@inertiajs/react";

const activeLinkClasses =
    "flex items-center gap-3 px-4 py-3 rounded-sm transition-all duration-150 active:scale-90 text-[#DF2225] bg-[#DF2225]/10 border-r-2 border-[#DF2225] font-bold";
const inactiveLinkClasses =
    "flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group";

const navLinks = [
    { href: "/dashboardv1", label: "Dashboard V1" },
    { href: "/dashboardv2", label: "Dashboard V2" },
    { href: "/dashboardv3", label: "Dashboard V3" },
    { href: "/rkas", label: "RKAS" },
];
const isActiveLink = (href: string) => {
    return window.location.pathname === href;
};

const getLinkClasses = (href: string) => {
    return isActiveLink(href) ? activeLinkClasses : inactiveLinkClasses;
};

const LinkComponent = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <Link href={href} className={getLinkClasses(href)}>
            {children}
        </Link>
    );
};

const LinkComponentMobile = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <Link href={href} className={getLinkClasses(href)}>
            {children}
        </Link>
    );
};

interface User {
    id: number;
    name: string;
    email: string;
}

export function Header() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { auth } = usePage().props as any;
    const user = auth?.user;
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    display: inline-block;
                    vertical-align: middle;
                }
                body {
                    background-color: #131315;
                }
            `,
                }}
            />

            {/* Side Navigation */}
            <aside className="fixed left-0 top-0 h-full flex flex-col z-40 h-screen w-64 border-r border-[#2D2D32] bg-[#1A1A1E] dark:bg-[#1A1A1E] font-['Space_Grotesk'] text-sm tracking-tight">
                <div className="p-6">
                    <div className="flex items-center gap-3">
                        <span
                            className="material-symbols-outlined text-[#DF2225] text-2xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            security
                        </span>
                        <div>
                            <h1 className="text-[#DF2225] font-bold tracking-tighter text-xl">
                                FISCAL SENTINEL
                            </h1>
                            <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                                AI Budget Integrity
                            </p>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 mt-4">
                    <div className="px-3 space-y-1">
                        {/* Active Tab: Dashboard */}
                        {navLinks.map((link) => (
                            <LinkComponent key={link.href} href={link.href}>
                                {link.label}
                            </LinkComponent>
                        ))}
                    </div>
                </nav>
                <div className="p-6 border-t border-[#2D2D32]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#2D2D32] flex items-center justify-center">
                            <span className="material-symbols-outlined text-xs">
                                shield_person
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold truncate">
                                {user.name}
                            </p>
                            <p className="text-[10px] text-gray-500">
                                Tier 1 Access
                            </p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Top Navigation */}
            <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 border-b border-[#2D2D32] bg-[#0D0D0F]/80 backdrop-blur-md flex items-center justify-between px-8 z-30 font-['Space_Grotesk'] font-medium">
                <div className="flex items-center gap-4">
                    <span className="text-xs font-label-mono text-gray-500 uppercase tracking-widest">
                        System Status:{" "}
                        <span className="text-green-500">Vigilant</span>
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                            search
                        </span>
                        <input
                            className="bg-[#0D0D0F] border border-[#2D2D32] rounded text-sm pl-10 pr-4 py-1.5 focus:outline-none focus:border-[#DF2225] transition-colors w-64"
                            placeholder="Search budget ID..."
                            type="text"
                        />
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <button className="hover:text-[#DF2225] transition-opacity opacity-80 hover:opacity-100">
                            <span
                                className="material-symbols-outlined"
                                data-icon="notifications"
                            >
                                notifications
                            </span>
                        </button>
                        <button className="hover:text-[#DF2225] transition-opacity opacity-80 hover:opacity-100">
                            <span
                                className="material-symbols-outlined"
                                data-icon="settings"
                            >
                                settings
                            </span>
                        </button>
                        <div className="w-8 h-8 rounded-full border border-[#2D2D32] overflow-hidden">
                            <img
                                alt="User"
                                className="w-full h-full object-cover"
                                data-alt="professional portrait of a government official in a dark suit with a neutral background"
                                src="https://picsum.photos/500/500"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
