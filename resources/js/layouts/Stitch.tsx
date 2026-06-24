import { PropsWithChildren } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

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

            <Header />

            <main className="pt-24">
                {children}
            </main>

            <Footer />
        </>
    );
}
