import { PropsWithChildren } from "react";
import { Header } from "@/layouts/admin/Header";
// import { Footer } from  '@/layouts/admin/Footer';

export default function adminLayout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="font-body-md text-on-surface text-white bg-[#131315] min-h-screen">
                {/* Navigasi Samping & Atas otomatis muncul di setiap halaman */}
                <Header />

                {/* Area Konten Utama */}
                <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8 min-h-screen bg-[#0D0D0F]">
                    {children}
                </main>
            </div>
        </>
    );
}
