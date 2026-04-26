import { Link } from "@inertiajs/react";

export function Footer() {
    return (
        <footer className="bg-slate-800 py-8 px-4 sm:px-10 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-slate-100 font-bold text-lg mb-3">MARKAS Assistant</h3>
                        <p className="text-slate-400 text-sm">
                            Your ultimate assistant for modern web solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-100 font-semibold text-sm uppercase tracking-wider mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-slate-400 text-sm hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h4 className="text-slate-100 font-semibold text-sm uppercase tracking-wider mb-3">Account</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/login" className="text-slate-400 text-sm hover:text-white transition-colors">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/register" className="text-slate-400 text-sm hover:text-white transition-colors">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs">
                        &copy; {new Date().getFullYear()} MARKAS Assistant. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
