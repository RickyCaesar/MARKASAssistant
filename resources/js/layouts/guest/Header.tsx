import { useState, useRef } from 'react';
import { Head, Link } from "@inertiajs/react";

const activeLinkClasses = "tracking-tight text-sm uppercase font-bold text-[#DF2225] border-b-2 border-[#DF2225] pb-1";
const inactiveLinkClasses = "tracking-tight text-sm uppercase font-bold text-gray-400 hover:text-white transition-all duration-200";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
];
const isActiveLink = (href: string) => {
    return window.location.pathname === href;
}

const getLinkClasses = (href: string) => {
    return isActiveLink(href) ? activeLinkClasses : inactiveLinkClasses;
}

const LinkComponent = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <Link href={href} className={getLinkClasses(href)}>
            {children}
        </Link>
    );
};

const LinkComponentMobile = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <Link href={href} className={getLinkClasses(href)}>
            {children}
        </Link>
    );
};

const LinkComponentMobileLoginVersion = ({ href, version }: { href: string; version: string }) => {
    return (
        <Link href={href} className="tracking-tight text-sm uppercase font-bold text-gray-300 hover:text-white transition-all duration-200">
            <span className="text-[#DF2225] mr-2">{version}</span> Login {version}
        </Link>
    );
};

const LinkComponentMobileRegisterVersion = ({ href, version }: { href: string; version: string }) => {
    return (
        <Link href={href} className="tracking-tight text-sm uppercase font-bold text-gray-300 hover:text-white transition-all duration-200">
            <span className="text-[#DF2225] mr-2">{version}</span> Daftar {version}
        </Link>
    );
};


export function Header() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    return (
        <>
        <Head>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </Head>
            <style>{`
                body { background-color: #0D0D0F; color: #e5e1e4; font-family: 'Space Grotesk', sans-serif; }
                .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
                .glass-panel { background: rgba(26, 26, 30, 0.8); backdrop-filter: blur(12px); border: 1px solid #2D2D32; }
                .scan-line { background: linear-gradient(to bottom, transparent, #DF2225, transparent); height: 100%; width: 2px; position: absolute; left: 0; animation: scan 3s infinite linear; }
                @keyframes scan { 0% { left: 0%; } 100% { left: 100%; } }
            `}</style>

            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-[#0D0D0F] border-b border-[#2D2D32]">
                <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                    <div className="flex items-center gap-3">
                        <img src="/icon.png" alt="MARKAS Assistant Logo" className="w-8 h-8 object-contain" />
                        <div className="text-xl font-black tracking-tighter text-white uppercase">
                            MARKAS <span className="text-[#DF2225]">Assistant</span>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <LinkComponent key={link.href} href={link.href}>
                                {link.label}
                            </LinkComponent>
                        ))}
                    </div>
                    <div className="hidden lg:flex items-center space-x-4" ref={dropdownRef}>
                        {/* Login Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setLoginOpen(prev => !prev)}
                                className="flex items-center gap-2 bg-[#DF2225] text-white px-6 py-2 tracking-tight text-sm uppercase font-bold hover:bg-[#C00014] transition-all duration-200 active:scale-95"
                            >
                                Sign In/Up
                                <svg
                                    className={`w-3 h-3 transition-transform duration-200 ${loginOpen ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {loginOpen && (
                                <div className="absolute right-0 mt-2 w-44 bg-[#1A1A1E] border border-[#2D2D32] shadow-2xl z-50">
                                    <div className="px-3 py-1.5 border-b border-[#2D2D32]">
                                        <span className="text-[10px] tracking-widest uppercase text-gray-500">Sign In</span>
                                    </div>
                                    <Link
                                        href="/loginv1"
                                        onClick={() => setLoginOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-tight text-gray-300 hover:bg-[#DF2225] hover:text-white transition-colors duration-150"
                                    >
                                        <span className="text-[#DF2225] text-xs font-black group-hover:text-white">V.1</span>
                                        Login V.1
                                    </Link>
                                    <Link
                                        href="/loginv2"
                                        onClick={() => setLoginOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-tight text-gray-300 hover:bg-[#DF2225] hover:text-white transition-colors duration-150"
                                    >
                                        <span className="text-[#DF2225] text-xs font-black">V.2</span>
                                        Login V.2
                                    </Link>
                                    <Link
                                        href="/loginv3"
                                        onClick={() => setLoginOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-tight text-gray-300 hover:bg-[#DF2225] hover:text-white transition-colors duration-150"
                                    >
                                        <span className="text-[#DF2225] text-xs font-black">V.3</span>
                                        Login V.3
                                    </Link>
                                    <div className="px-3 py-1.5 border-b border-[#2D2D32]">
                                        <span className="text-[10px] tracking-widest uppercase text-gray-500">Sign Up</span>
                                    </div>
                                    <Link
                                        href="/register"
                                        onClick={() => setLoginOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-tight text-gray-300 hover:bg-[#DF2225] hover:text-white transition-colors duration-150"
                                    >
                                        <span className="text-[#DF2225] text-xs font-black">V.1</span>
                                        Daftar V.1
                                    </Link>
                                    <Link
                                        href="/registerv2"
                                        onClick={() => setLoginOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-tight text-gray-300 hover:bg-[#DF2225] hover:text-white transition-colors duration-150"
                                    >
                                        <span className="text-[#DF2225] text-xs font-black">V.2</span>
                                        Daftar V.2
                                    </Link>
                                    <Link
                                        href="/registerv3"
                                        onClick={() => setLoginOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-tight text-gray-300 hover:bg-[#DF2225] hover:text-white transition-colors duration-150"
                                    >
                                        <span className="text-[#DF2225] text-xs font-black">V.3</span>
                                        Daftar V.3
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-white hover:text-[#DF2225] transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-[#0D0D0F] border-b border-[#2D2D32] px-8 py-4 flex flex-col space-y-4">
                        {navLinks.map(link => (
                            <LinkComponentMobile key={link.href} href={link.href}>
                                {link.label}
                            </LinkComponentMobile>
                        ))}
                        <div className="pt-4 border-t border-[#2D2D32] flex flex-col space-y-3">
                            <span className="text-[10px] tracking-widest uppercase text-gray-500">Login Versions</span>
                            <LinkComponentMobileLoginVersion href="/loginv1" version="V.1" />
                            <LinkComponentMobileLoginVersion href="/loginv2" version="V.2" />
                            <LinkComponentMobileLoginVersion href="/loginv3" version="V.3" />
                        </div>
                        <div className="pt-4 border-t border-[#2D2D32] flex flex-col space-y-3">
                            <span className="text-[10px] tracking-widest uppercase text-gray-500">Register Versions</span>
                            <LinkComponentMobileRegisterVersion href="/register" version="V.1" />
                            <LinkComponentMobileRegisterVersion href="/registerv2" version="V.2" />
                            <LinkComponentMobileRegisterVersion href="/registerv3" version="V.3" />
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
