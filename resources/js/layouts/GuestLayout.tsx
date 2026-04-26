// resources/js/Layouts/GuestLayout.tsx
import { PropsWithChildren } from 'react';
import { Header } from '@/layouts/Header';
import { Footer } from  '@/layouts/Footer';

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            {/* Page Content */}
            <main>{children}</main>
            <Footer />
        </>
    );
}