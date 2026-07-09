import { useEffect } from "react";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

const Dialog = ({ isOpen, onClose, title, message }: DialogProps) => {
    useEffect(() => {
        if (!isOpen) return;
        const body = document.body;
        const html = document.documentElement;
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
        return () => {
            body.style.overflow = "";
            html.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
             onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="relative w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 p-4">
                <div className="p-stack-lg">
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="w-16 h-16 bg-primary-container/10 border border-primary-container rounded-full flex items-center justify-center mb-4">
                            <span
                                className="material-symbols-outlined text-primary-container text-4xl"
                                data-weight="fill"
                            >
                                warning
                            </span>
                        </div>
                        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
                            {title}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
                            {message}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button
                            className="w-full h-12 bg-primary-container text-on-primary-container font-headline-md text-body-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
                            id="terminate-btn"
                        >
                            <span className="material-symbols-outlined text-xl">
                                power_settings_new
                            </span>
                            Terminate Session
                        </button>
                        <button
                            className="w-full h-12 bg-transparent border border-outline-variant text-on-surface font-body-lg hover:bg-surface-variant transition-colors flex items-center justify-center"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;


