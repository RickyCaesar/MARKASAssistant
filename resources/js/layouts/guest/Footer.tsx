export function Footer() {
    return (
        <>
            <footer className="w-full border-t border-[#2D2D32] bg-[#0D0D0F]">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full max-w-7xl mx-auto">
                    <div className="flex items-center gap-3">
                        <img
                            src="/icon.png"
                            alt="MARKAS Assistant Logo"
                            className="w-8 h-8 object-contain"
                        />
                        <div className="text-xl font-black tracking-tighter text-white uppercase">
                            MARKAS{" "}
                            <span className="text-[#DF2225]">Assistant</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
                        <a
                            className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#DF2225] transition-all cursor-pointer"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                        <a
                            className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#DF2225] transition-all cursor-pointer"
                            href="#"
                        >
                            Terms of Service
                        </a>
                        <a
                            className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#DF2225] transition-all cursor-pointer"
                            href="#"
                        >
                            Security Whitepaper
                        </a>
                        <a
                            className="text-xs tracking-widest uppercase text-gray-500 hover:text-[#DF2225] transition-all cursor-pointer"
                            href="#"
                        >
                            Data Integrity Protocol
                        </a>
                    </div>
                    <div className="text-xs tracking-widest uppercase text-gray-500">
                        &copy; 2026 MARKAS Assistant.
                    </div>
                </div>
            </footer>
        </>
    );
}
