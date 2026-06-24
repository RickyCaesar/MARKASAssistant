import { Head, Link, useForm } from "@inertiajs/react";

export default function Login3() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                />
            </Head>
            <style>{`body { background-color: #0D0D0F; }`}</style>
            <div
                className="dark font-body-md text-on-surface min-h-screen flex flex-col"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 2px 2px, #2D2D32 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            >
                {/* ponytail: tech-pattern via inline style, fonts via Head */}
                <main className="flex-grow flex items-center justify-center px-6 py-8 relative overflow-hidden">
                    {/* Subtle Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="w-full max-w-md z-10">
                        {/* Branding Area */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-32 h-32 mb-4">
                                <img
                                    src="/icon.png"
                                    alt="MARKAS Assistant Logo"
                                    className="size-32 object-contain"
                                />
                            </div>
                            <h1 className="font-headline-xl text-headline-xl text-on-background tracking-tighter uppercase">
                                MARKAS{" "}
                                <span className="text-[#DF2225]">
                                    Assistant
                                </span>
                            </h1>
                        </div>
                        {/* Login Card */}
                        <div className="bg-[#1A1A1E] border border-[#2D2D32] rounded-lg p-8 shadow-2xl relative overflow-hidden">
                            {/* Precision Header Decoration */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#DF2225]"></div>
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-label-mono text-label-mono text-[#DF2225] bg-[#DF2225]/10 px-2 py-1 rounded border border-[#DF2225]/20">
                                    AUTH_V3
                                </span>
                                <Link
                                    href="/"
                                    className="font-label-mono text-label-mono text-on-surface-variant opacity-60"
                                >
                                    Kembali
                                </Link>
                            </div>
                            <form className="space-y-4" onSubmit={submit}>
                                {/* Email Field */}
                                <div className="space-y-1">
                                    <label
                                        className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-6 -translate-y-1/2 text-on-surface-variant text-body-md"
                                            data-icon="alternate_email"
                                        >
                                            alternate_email
                                        </span>
                                        <input
                                            className="w-full bg-[#0D0D0F] border border-[#2D2D32] rounded text-on-surface px-10 py-3 focus:outline-none focus:border-[#DF2225] transition-colors font-body-md placeholder:text-on-tertiary-fixed-variant"
                                            id="email"
                                            placeholder="admin@example.com"
                                            type="text"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-xs text-red-400 mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                {/* Password Field */}
                                <div className="space-y-1">
                                    <div className="flex justify-between items-end">
                                        <label
                                            className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <a
                                            className="font-label-mono text-data-point text-[#DF2225] hover:opacity-80 transition-opacity"
                                            href="#"
                                        >
                                            Lupa Password?
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <span
                                            className="material-symbols-outlined absolute left-3 top-6 -translate-y-1/2 text-on-surface-variant text-body-md"
                                            data-icon="lock_open"
                                        >
                                            lock_open
                                        </span>
                                        <input
                                            className="w-full bg-[#0D0D0F] border border-[#2D2D32] rounded text-on-surface px-10 py-3 focus:outline-none focus:border-[#DF2225] transition-colors font-body-md placeholder:text-on-tertiary-fixed-variant"
                                            id="password"
                                            placeholder="••••••••••••"
                                            type="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value,
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                    {errors.password && (
                                        <p className="text-xs text-red-400 mt-1">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                                {/* Action Button */}
                                <button
                                    className="w-full bg-[#DF2225] hover:bg-[#C00014] text-on-primary-container font-headline-md text-body-lg py-4 rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-[0.98] mt-4 shadow-[0_0_20px_rgba(223,34,37,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={processing}
                                >
                                    <span className="font-headline-md uppercase tracking-tight">
                                        {processing ? "Memproses..." : "Login"}
                                    </span>
                                </button>
                            </form>
                        </div>
                        {/* System Footer */}
                        <div className="mt-8 text-center">
                            <p className="font-body-md text-data-point text-on-surface-variant opacity-40 uppercase tracking-[0.2em]">
                                Restricted Access Terminal. Unauthorized entry
                                is monitored and reported.
                            </p>
                        </div>
                    </div>
                </main>
                {/* Side Illustration/Data Visualizer for Desktop */}
                <div className="hidden lg:block fixed right-0 top-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-20 border-l border-[#2D2D32]">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary-container/10 to-transparent"></div>
                    <div className="p-8 space-y-4 mt-24">
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
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-24 bg-[#1A1A1E] border border-[#2D2D32]"></div>
                            <div className="h-24 bg-[#1A1A1E] border border-[#2D2D32]"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-12 right-12">
                        <span
                            className="material-symbols-outlined text-[200px] text-white/5 select-none"
                            data-icon="analytics"
                        >
                            analytics
                        </span>
                    </div>
                </div>
                {/* SideNavBar Suppression Logic: Suppressed for Login */}
                {/* BottomNavBar Suppression Logic: Suppressed for Login */}
            </div>
        </>
    );
}
