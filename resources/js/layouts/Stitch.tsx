import { PropsWithChildren } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function StitchLayout({ children }: PropsWithChildren) {
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
                    <div className="text-xl font-black tracking-tighter text-white uppercase">
                        MARKAS Assistant
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link className="tracking-tight text-sm uppercase font-bold text-[#DF2225] border-b-2 border-[#DF2225] pb-1" href="/">Home</Link>
                        <Link className="tracking-tight text-sm uppercase font-bold text-gray-400 hover:text-white transition-all duration-200" href="/features">AI Services</Link>
                        <Link className="tracking-tight text-sm uppercase font-bold text-gray-400 hover:text-white transition-all duration-200" href="/features">Features</Link>
                        <Link className="tracking-tight text-sm uppercase font-bold text-gray-400 hover:text-white transition-all duration-200" href="#">Contact</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link className="bg-[#DF2225] text-white px-6 py-2 tracking-tight text-sm uppercase font-bold hover:bg-[#1A1A1E] transition-all duration-200 active:scale-95" href="/login">Secure Login</Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24">
                {children}
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-[#2D2D32] bg-[#0D0D0F]">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full max-w-7xl mx-auto">
                    <div className="text-lg font-bold text-white uppercase mb-4 md:mb-0">
                        MARKAS Assistant
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
                        <a className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#DF2225] transition-all cursor-pointer" href="#">Privacy Policy</a>
                        <a className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#DF2225] transition-all cursor-pointer" href="#">Terms of Service</a>
                        <a className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#DF2225] transition-all cursor-pointer" href="#">Security Whitepaper</a>
                        <a className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#DF2225] transition-all cursor-pointer" href="#">Data Integrity Protocol</a>
                    </div>
                    <div className="text-xs tracking-widest uppercase text-gray-500">
                        &copy; 2026 MARKAS Assistant.
                    </div>
                </div>
            </footer>
        </>
    );
}