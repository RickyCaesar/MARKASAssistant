import { Link } from "@inertiajs/react";
import StitchLayout from "@/layouts/Stitch";
import { useState } from "react";

export default function Welcome() {
    const [loginOpen, setLoginOpen] = useState(false);
    return (
        <StitchLayout>
            {/* Hero Section */}
            <section className="relative min-h-[870px] flex items-center overflow-hidden px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <span className="inline-block px-3 py-1 border border-[#DF2225] text-[#DF2225] text-sm uppercase tracking-widest mb-6">
                            Operational Status: Active
                        </span>
                        <h1 className="text-5xl lg:text-[40px] font-bold text-white mb-6 leading-tight tracking-tight">
                            Otomatisasi AI untuk <span className="text-[#DF2225]">Pengawasan Anggaran</span> Presisi
                        </h1>
                        <p className="text-lg text-[#e6bdb8] max-w-xl mb-10 leading-relaxed">
                            Manfaatkan kekuatan audit AI otonom untuk mengidentifikasi penyimpangan, memastikan kepatuhan, dan memulihkan dana yang salah alokasi dengan presisi tinggi.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/register"
                                className="bg-[#DF2225] text-white text-base font-bold px-10 py-4 hover:brightness-110 active:scale-95 transition-all text-center"
                            >
                                Mulai Gratis
                            </Link>
                        </div>
                    </div>

                    {/* Abstract AI Visualization */}
                    <div className="relative h-[500px] w-full glass-panel rounded-lg overflow-hidden group">
                        <div className="absolute inset-0 bg-[#0D0D0F]">
                            <div className="p-8 grid grid-cols-6 gap-2 opacity-40">
                                <div className="h-4 bg-[#2a2a2c] rounded-sm col-span-2"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm"></div>
                                <div className="h-4 bg-[#DF2225] rounded-sm"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm col-span-2"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm col-span-2"></div>
                                <div className="h-4 bg-[#ffb4ab] rounded-sm"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm col-span-2"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm col-span-3"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm col-span-2"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm"></div>
                                <div className="h-4 bg-[#DF2225] opacity-20 rounded-sm"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm col-span-4"></div>
                                <div className="h-4 bg-[#2a2a2c] rounded-sm"></div>
                            </div>
                        </div>
                        <div className="scan-line"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="p-8 glass-panel border-[#DF2225]/30 relative z-20">
                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="material-symbols-outlined text-[#DF2225]">monitoring</span>
                                    <span className="text-sm uppercase tracking-widest text-white">ANOMALI_TERDETEKSI</span>
                                </div>
                                <div className="text-4xl font-black text-white mb-2">-Rp 2.1 M</div>
                                <div className="text-xs uppercase tracking-widest text-[#ffb4ab]">Penyimpangan di Dinas Pendidikan Kota</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 px-8 bg-[#0e0e10]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Cara Kerja</h2>
                        <p className="text-base text-[#e6bdb8] uppercase tracking-widest">Urutan Eksekusi Protokol</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1: Scan */}
                        <div className="p-8 border border-[#5d3f3c] bg-[#1A1A1E] hover:border-[#DF2225] transition-colors group">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#2a2a2c] mb-6 group-hover:bg-[#DF2225] transition-colors">
                                <span className="material-symbols-outlined text-white">document_scanner</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Pindai</h3>
                            <p className="text-base text-[#e6bdb8]">
                                AI kami menyerap spreadsheet anggaran, PDF, dan data ERP dari seluruh sistem instansi secara instan.
                            </p>
                        </div>
                        {/* Step 2: Analyze */}
                        <div className="p-8 border border-[#5d3f3c] bg-[#1A1A1E] hover:border-[#DF2225] transition-colors group">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#2a2a2c] mb-6 group-hover:bg-[#DF2225] transition-colors">
                                <span className="material-symbols-outlined text-white">troubleshoot</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Analisis</h3>
                            <p className="text-base text-[#e6bdb8]">
                                Algoritma Sentinel membandingkan pola historis terhadap pengeluaran saat ini untuk mengisolasi outlier dan item tidak patuh.
                            </p>
                        </div>
                        {/* Step 3: Correct */}
                        <div className="p-8 border border-[#5d3f3c] bg-[#1A1A1E] hover:border-[#DF2225] transition-colors group">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#2a2a2c] mb-6 group-hover:bg-[#DF2225] transition-colors">
                                <span className="material-symbols-outlined text-white">check_circle</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Koreksi</h3>
                            <p className="text-base text-[#e6bdb8]">
                                Terima jalur koreksi yang dapat ditindaklanjuti dengan rekomendasi AI berkepercayaan tinggi untuk menyeimbangkan anggaran Anda.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Bento Grid */}
            <section className="py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-white mb-2">Keunggulan Utama</h2>
                        <div className="h-1 w-24 bg-[#DF2225]"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Compliance Card */}
                        <div className="md:col-span-2 md:row-span-2 p-10 bg-[#1A1A1E] border border-[#2D2D32] flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="bg-[#DF2225]/10 text-[#DF2225] px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">Prioritas Tinggi</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Kepatuhan Absolut</h3>
                                <p className="text-lg text-[#e6bdb8]">
                                    Otomatis selaraskan pengeluaran instansi Anda dengan mandat anggaran nasional dan daerah. Kami menghilangkan kesalahan manusia yang menyebabkan kegagalan audit.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-4 text-[#DF2225] text-sm uppercase tracking-widest">
                                <span className="material-symbols-outlined">security</span>
                                <span>SIAP AUDIT BERSERTIFIKAT</span>
                            </div>
                        </div>
                        {/* Savings Card */}
                        <div className="md:col-span-2 p-10 bg-[#1A1A1E] border border-[#2D2D32]">
                            <h3 className="text-2xl font-bold text-white mb-2">Penghematan Signifikan</h3>
                            <p className="text-base text-[#e6bdb8] mb-6">
                                Rata-rata instansi memulihkan hingga 4.2% anggaran operasional tahunan mereka dalam 30 hari pertama implementasi.
                            </p>
                            <div className="text-3xl font-black text-white">4.2% ROI</div>
                        </div>
                        {/* Speed Card */}
                        <div className="md:col-span-1 p-10 bg-[#1A1A1E] border border-[#2D2D32]">
                            <h3 className="text-2xl font-bold text-white mb-2">Kecepatan</h3>
                            <p className="text-base text-[#e6bdb8]">
                                Kurangi waktu persiapan audit dari minggu menjadi menit.
                            </p>
                        </div>
                        {/* Integrity Card */}
                        <div className="md:col-span-1 p-10 bg-[#DF2225] text-white">
                            <h3 className="text-2xl font-bold mb-2">Integritas</h3>
                            <p className="text-base opacity-90">
                                Pencatatan immutable dari setiap perubahan dan koreksi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 px-8 bg-[#1b1b1d]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-black text-[#DF2225] mb-2">450+</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400">Instansi Terlayani</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#DF2225] mb-2">Rp 12M</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400">Dana Dipulihkan</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#DF2225] mb-2">99.7%</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400">Akurasi Deteksi</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#DF2225] mb-2">&lt;5mnt</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400">Waktu Analisis</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8 bg-[#2a2a2c] border-y border-[#2D2D32]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold text-white mb-8">Siap mengamankan anggaran Anda?</h2>
                    <p className="text-lg text-[#e6bdb8] mb-12">
                        Bergabung dengan 450+ instansi yang menggunakan Fiscal Sentinel AI untuk menjaga presisi anggaran.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            href="/register"
                            className="bg-[#DF2225] text-white font-bold text-lg px-12 py-5 uppercase tracking-widest hover:brightness-125 transition-all text-center"
                        >
                            Daftar Sekarang
                        </Link>
                        {/* Login Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setLoginOpen(prev => !prev)}
                                className="flex items-center gap-2 border border-white/20 text-white font-bold text-lg px-12 py-5 uppercase tracking-widest hover:bg-white/5 transition-all text-center"
                            >
                                Login
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
                                        <span className="text-[10px] tracking-widest uppercase text-gray-500">Select Version</span>
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
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </StitchLayout>
    );
}