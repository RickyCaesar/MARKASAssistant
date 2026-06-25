import { useEffect, useRef } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
};

// ponytail: minimal modal, no radix/ui dependency

export default function Dialog({ isOpen, onClose, title, message }: Props) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-50 bg-black/60"
                onClick={onClose}
            />
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                className="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-[#131315] border border-[#2D2D32] p-6 shadow-2xl"
            >
                <h2 className="text-headline-md font-headline-md text-on-surface mb-3">
                    {title}
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                    {message}
                </p>
                <div className="flex justify-end gap-3">
                    <button
                        className="h-10 px-4 bg-transparent border border-[#2D2D32] text-on-surface text-sm hover:bg-[#2D2D32] transition-colors"
                        onClick={onClose}
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </>
    );
}
