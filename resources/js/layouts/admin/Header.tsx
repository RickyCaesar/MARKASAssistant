import { useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Dialog from "@/components/die_dump/dialog2";

const activeLinkClasses =
    "flex items-center gap-3 px-4 py-3 rounded-sm transition-all duration-150 active:scale-90 text-[#DF2225] bg-[#DF2225]/10 border-r-2 border-[#DF2225] font-bold";
const inactiveLinkClasses =
    "flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group";

const navLinks = [
    { href: "/dashboardv1", label: "Dashboard V1" },
    { href: "/dashboardv2", label: "Dashboard V2" },
    { href: "/dashboardv3", label: "Dashboard V3" },
    { href: "/raporpendidikan", label: "Rapor Pendidikan" },
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

interface User {
    id: number;
    name: string;
    email: string;
}

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [IsLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
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

            {/* ponytail: mobile overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Side Navigation */}
            <aside
                className={`fixed left-0 top-0 h-full flex flex-col z-40 w-64 border-r border-[#2D2D32] bg-[#1A1A1E] font-['Space_Grotesk'] text-sm tracking-tight transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                <div className="p-6">
                    <div className="flex items-center gap-3">
                        <img
                            src="/icon.png"
                            alt="MARKAS Assistant Logo"
                            className="material-symbols-outlined text-[#DF2225] text-2xl w-10 h-10 object-contain"
                        />
                        <div>
                            <h1 className="text-white font-bold tracking-tighter text-xl">
                                MARKAS
                                <span className="text-[#DF2225]">
                                    Assistant
                                </span>
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
            <header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] h-16 border-b border-[#2D2D32] bg-[#0D0D0F]/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 z-30 font-['Space_Grotesk'] font-medium">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden text-gray-400 hover:text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <span className="text-xs font-label-mono text-gray-500 uppercase tracking-widest">
                        System Status:{" "}
                        <span className="text-green-500">Vigilant</span>
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="relative">
                            <button
                                className="hover:text-[#DF2225] transition-opacity opacity-80 hover:opacity-100"
                                onClick={() => setSettingsOpen(!settingsOpen)}
                            >
                                <span className="material-symbols-outlined">
                                    settings
                                </span>
                            </button>
                            {settingsOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setSettingsOpen(false)}
                                    />
                                    <div className="absolute right-0 mt-2 w-48 rounded-md border border-[#2D2D32] bg-[#1A1A1E] shadow-lg z-50 py-1 font-['Space_Grotesk'] text-sm">
                                        <Link
                                            href="/profile"
                                            className="block px-4 py-2 text-gray-300 hover:bg-[#2D2D32] hover:text-white"
                                        >
                                            Profil
                                        </Link>
                                        <Link
                                            href="/settings"
                                            className="block px-4 py-2 text-gray-300 hover:bg-[#2D2D32] hover:text-white"
                                        >
                                            Pengaturan Akun
                                        </Link>
                                        <hr className="border-[#2D2D32] my-1" />
                                        <button
                                            className="block w-full text-left px-4 py-2 text-red-400 hover:bg-[#2D2D32] hover:text-red-300"
                                            onClick={() =>
                                                setLogoutDialogOpen(true)
                                            }
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
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
            <Dialog
                isOpen={IsLogoutDialogOpen}
                onClose={() => setLogoutDialogOpen(false)}
                icon="power_settings_new"
                title="Logout"
                link="/logout"
                message="Yakin ingin keluar sekarang?"
                type="post"
            />
        </>
    );
}
