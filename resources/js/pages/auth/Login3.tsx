import { useEffect } from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Login3() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    useEffect(() => {
        // Prevent duplicate injection on re-renders
        if (document.getElementById("tw-cdn-login3")) return;

        // 1. Inject Google Fonts
        const fontGrotesk = document.createElement("link");
        fontGrotesk.rel = "stylesheet";
        fontGrotesk.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
        document.head.appendChild(fontGrotesk);

        const fontMaterial = document.createElement("link");
        fontMaterial.rel = "stylesheet";
        fontMaterial.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
        document.head.appendChild(fontMaterial);

        // 2. Inject body/tech-pattern styles
        const style = document.createElement("style");
        style.id = "login3-styles";
        style.textContent = `
            body { background-color: #0D0D0F; }
            .tech-pattern {
                background-image: radial-gradient(circle at 2px 2px, #2D2D32 1px, transparent 0);
                background-size: 32px 32px;
            }
        `;
        document.head.appendChild(style);

        // 3. Load Tailwind CDN, then set config inside onload
        //    (tailwind global only exists after CDN initializes)
        const cdnScript = document.createElement("script");
        cdnScript.id = "tw-cdn-login3";
        cdnScript.src = "https://cdn.tailwindcss.com?plugins=forms,container-queries";
        cdnScript.onload = () => {
            (window as any).tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        colors: {
                            "secondary-fixed": "#e4e1e7",
                            "on-error": "#690005",
                            "inverse-primary": "#c00014",
                            "background": "#131315",
                            "inverse-on-surface": "#313032",
                            "tertiary-fixed-dim": "#c8c5cc",
                            "tertiary-fixed": "#e4e1e8",
                            "on-primary": "#690006",
                            "surface-dim": "#131315",
                            "surface-container-highest": "#353437",
                            "surface-container-low": "#1b1b1d",
                            "primary-container": "#df2225",
                            "on-background": "#e5e1e4",
                            "on-tertiary-container": "#fbf8ff",
                            "on-primary-container": "#fff8f6",
                            "tertiary": "#c8c5cc",
                            "secondary-fixed-dim": "#c8c5cb",
                            "primary-fixed-dim": "#ffb4ab",
                            "surface-bright": "#39393b",
                            "on-tertiary-fixed": "#1b1b20",
                            "on-secondary-fixed-variant": "#47464b",
                            "inverse-surface": "#e5e1e4",
                            "surface-container-lowest": "#0e0e10",
                            "outline": "#ad8884",
                            "on-secondary-fixed": "#1b1b1f",
                            "on-secondary": "#303034",
                            "surface-variant": "#353437",
                            "secondary-container": "#47464b",
                            "surface-container-high": "#2a2a2c",
                            "on-tertiary": "#303035",
                            "on-primary-fixed-variant": "#93000c",
                            "surface-tint": "#ffb4ab",
                            "primary": "#ffb4ab",
                            "on-primary-fixed": "#410002",
                            "on-secondary-container": "#b6b4b9",
                            "tertiary-container": "#737278",
                            "surface-container": "#201f21",
                            "error-container": "#93000a",
                            "primary-fixed": "#ffdad6",
                            "outline-variant": "#5d3f3c",
                            "secondary": "#c8c5cb",
                            "error": "#ffb4ab",
                            "on-surface": "#e5e1e4",
                            "on-tertiary-fixed-variant": "#46464c",
                            "on-error-container": "#ffdad6",
                            "surface": "#131315",
                            "on-surface-variant": "#e6bdb8",
                        },
                        borderRadius: {
                            DEFAULT: "0.125rem",
                            lg: "0.25rem",
                            xl: "0.5rem",
                            full: "0.75rem",
                        },
                        spacing: {
                            "stack-md": "16px",
                            "container-padding": "24px",
                            "stack-lg": "32px",
                            gutter: "16px",
                            unit: "4px",
                            "stack-sm": "8px",
                        },
                        fontFamily: {
                            "headline-lg": ["Space Grotesk"],
                            "body-md": ["Space Grotesk"],
                            "label-mono": ["Space Grotesk"],
                            "headline-xl": ["Space Grotesk"],
                            "headline-md": ["Space Grotesk"],
                            "data-point": ["Space Grotesk"],
                            "body-lg": ["Space Grotesk"],
                        },
                        fontSize: {
                            "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
                            "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                            "label-mono": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
                            "headline-xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
                            "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
                            "data-point": ["12px", { lineHeight: "16px", fontWeight: "700" }],
                            "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                        },
                    },
                },
            };
        };
        document.head.appendChild(cdnScript);

        return () => {
            document.getElementById("tw-cdn-login3")?.remove();
            document.getElementById("login3-styles")?.remove();
        };
    }, []);

    return (
        <div className="dark font-body-md text-on-surface min-h-screen flex flex-col tech-pattern">
            {/* TopAppBar Suppression Logic: Suppressed for Transactional Page (Login) */}
            <main className="flex-grow flex items-center justify-center px-container-padding py-stack-lg relative overflow-hidden">
                {/* Subtle Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="w-full max-w-md z-10">
                    {/* Branding Area */}
                    <div className="text-center mb-stack-lg">
                        <div className="inline-flex items-center justify-center w-32 h-32 mb-stack-md">
                            <img src="/icon.png" alt="MARKAS Assistant Logo" className="size-32 object-contain" />
                        </div>
                        <h1 className="font-headline-xl text-headline-xl text-on-background tracking-tighter uppercase">
                            MARKAS <span className="text-[#DF2225]">Assistant</span>
                        </h1>
                    </div>
                    {/* Login Card */}
                    <div className="bg-[#1A1A1E] border border-[#2D2D32] rounded-lg p-stack-lg shadow-2xl relative overflow-hidden">
                        {/* Precision Header Decoration */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#DF2225]"></div>
                        <div className="flex items-center justify-between mb-stack-lg">
                            <span className="font-label-mono text-label-mono text-[#DF2225] bg-[#DF2225]/10 px-2 py-1 rounded border border-[#DF2225]/20">AUTH_V3</span>
                            <Link
                                href="/"
                                className="font-label-mono text-label-mono text-on-surface-variant opacity-60"
                            >
                                Kembali
                            </Link>
                        </div>
                        <form className="space-y-stack-md" onSubmit={submit}>
                            {/* Email Field */}
                            <div className="space-y-unit">
                                <label className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest" htmlFor="email">Email</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-9 -translate-y-1/2 text-on-surface-variant text-body-md" data-icon="alternate_email">alternate_email</span>
                                    <input
                                        className="w-full bg-[#0D0D0F] border border-[#2D2D32] rounded text-on-surface px-10 py-3 focus:outline-none focus:border-[#DF2225] transition-colors font-body-md placeholder:text-on-tertiary-fixed-variant"
                                        id="email"
                                        placeholder="admin@example.com"
                                        type="text"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        required
                                    />
                                </div>
                                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                            </div>
                            {/* Password Field */}
                            <div className="space-y-unit">
                                <div className="flex justify-between items-end">
                                    <label className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest" htmlFor="password">Password</label>
                                    <a className="font-label-mono text-data-point text-[#DF2225] hover:opacity-80 transition-opacity" href="#">Lupa Password?</a>
                                </div>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-9 -translate-y-1/2 text-on-surface-variant text-body-md" data-icon="lock_open">lock_open</span>
                                    <input
                                        className="w-full bg-[#0D0D0F] border border-[#2D2D32] rounded text-on-surface px-10 py-3 focus:outline-none focus:border-[#DF2225] transition-colors font-body-md placeholder:text-on-tertiary-fixed-variant"
                                        id="password"
                                        placeholder="••••••••••••"
                                        type="password"
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        required
                                    />
                                </div>
                                {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password}</p>}
                            </div>
                            {/* Action Button */}
                            <button
                                className="w-full bg-[#DF2225] hover:bg-[#C00014] text-on-primary-container font-headline-md text-body-lg py-4 rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-[0.98] mt-stack-md shadow-[0_0_20px_rgba(223,34,37,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={processing}
                            >
                                <span className="font-headline-md uppercase tracking-tight">
                                    {processing ? 'Memproses...' : 'Login'}
                                </span>
                            </button>
                        </form>
                    </div>
                    {/* System Footer */}
                    <div className="mt-stack-lg text-center">
                        <p className="font-body-md text-data-point text-on-surface-variant opacity-40 uppercase tracking-[0.2em]">
                            Restricted Access Terminal. Unauthorized entry is monitored and reported.
                        </p>
                    </div>
                </div>
            </main>
            {/* Side Illustration/Data Visualizer for Desktop */}
            <div className="hidden lg:block fixed right-0 top-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-20 border-l border-[#2D2D32]">
                <div className="absolute inset-0 bg-gradient-to-l from-primary-container/10 to-transparent"></div>
                <div className="p-stack-lg space-y-stack-md mt-24">
                    <div className="h-12 w-full bg-[#1A1A1E] border border-[#2D2D32] flex items-center px-4">
                        <div className="h-2 w-1/2 bg-[#DF2225]/30"></div>
                    </div>
                    <div className="h-32 w-full bg-[#1A1A1E] border border-[#2D2D32] p-4 flex items-end space-x-2">
                        <div className="h-[20%] w-4 bg-[#DF2225]"></div>
                        <div className="h-[40%] w-4 bg-[#DF2225]/60"></div>
                        <div className="h-[30%] w-4 bg-[#DF2225]"></div>
                        <div className="h-[70%] w-4 bg-[#DF2225]/40"></div>
                        <div className="h-[90%] w-4 bg-[#DF2225]"></div>
                        <div className="h-[50%] w-4 bg-[#DF2225]/80"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-stack-md">
                        <div className="h-24 bg-[#1A1A1E] border border-[#2D2D32]"></div>
                        <div className="h-24 bg-[#1A1A1E] border border-[#2D2D32]"></div>
                    </div>
                </div>
                <div className="absolute bottom-12 right-12">
                    <span className="material-symbols-outlined text-[200px] text-white/5 select-none" data-icon="analytics">analytics</span>
                </div>
            </div>
            {/* SideNavBar Suppression Logic: Suppressed for Login */}
            {/* BottomNavBar Suppression Logic: Suppressed for Login */}
        </div>
    );
}