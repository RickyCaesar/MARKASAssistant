import React from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
};

const Dialog = (props: Props) => {
    if (!props.isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-9xl">
                        logout
                    </span>
                </div>
                <div className="p-stack-lg">
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center px-2 py-1 bg-surface-container-high border border-outline-variant rounded">
                            <span className="font-label-mono text-[10px] text-on-surface-variant">
                                SESSION_ID: FS-9902
                            </span>
                        </div>
                        <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-surface-variant"></div>
                            <div className="w-1.5 h-1.5 bg-surface-variant"></div>
                        </div>
                    </div>
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
                            Confirm Logout
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
                            Are you sure you want to terminate your secure
                            session? All unsaved audit parameters will be lost.
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
                            onClick={() => props.onClose()}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                <div className="bg-surface-container-low border-t border-outline-variant px-stack-md py-2 flex justify-between items-center">
                    <span className="font-label-mono text-[10px] text-on-tertiary-fixed-variant">
                        ESTABLISHED: 04:12:00 UTC
                    </span>
                    <span className="font-label-mono text-[10px] text-primary-container flex items-center gap-1">
                        <span className="w-1 h-1 bg-primary-container rounded-full"></span>
                        SECURE_LINE_ACTIVE
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
