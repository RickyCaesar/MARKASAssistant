import { PropsWithChildren } from "react";
import { Header } from "@/layouts/guest/Header";
import { Footer } from "@/layouts/guest/Footer";

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            {/* Page Content */}
            <main className="pt-24">{children}</main>
            <Footer />
        </>
    );
}
