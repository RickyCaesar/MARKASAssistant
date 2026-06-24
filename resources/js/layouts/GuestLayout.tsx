// resources/js/Layouts/GuestLayout.tsx
import { PropsWithChildren, useState, useRef, useEffect } from 'react';
import { Header } from '@/layouts/Header';
import { Footer } from  '@/layouts/Footer';

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            {/* Page Content */}
            <main className="pt-24">
                {children}
            </main>
            <Footer />
        </>
    );
}
