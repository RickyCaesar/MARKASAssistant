import { useEffect } from "react";
import { Link } from "@inertiajs/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    icon: string;
    link: null | string;
    type: "redirect" | "post" | "get" | "delete";
};

const Dialog = (props: Props) => {
    useEffect(() => {
        if (!props.isOpen) return;
        const body = document.body;
        const html = document.documentElement;
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
        return () => {
            body.style.overflow = "";
            html.style.overflow = "";
        };
    }, [props.isOpen]);

    if (!props.isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={(e) => {
                if (e.target === e.currentTarget) props.onClose();
            }}
        >
            <div className="relative w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-stack-lg m-5">
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="w-16 h-16 bg-primary-container/10 border border-primary-container rounded-full flex items-center justify-center mb-4">
                            <span
                                className="material-symbols-outlined text-primary-container text-4xl"
                                data-weight="fill"
                            >
                                {props.icon}
                            </span>
                        </div>
                        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
                            {props.title}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
                            {props.message}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {props.type === "redirect" ? (
                            <a
                                href={props.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-12 bg-primary-container text-on-primary-container font-headline-md text-body-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
                                onClick={() => props.onClose()}
                            >
                                Yes
                            </a>
                        ) : (
                            <Link
                                className="w-full h-12 bg-primary-container text-on-primary-container font-headline-md text-body-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
                                as="button"
                                method="post"
                                href={props.link || "#"}
                            >
                                Yes
                            </Link>
                        )}
                        <button
                            className="w-full h-12 bg-transparent border border-outline-variant text-on-surface font-body-lg hover:bg-surface-variant transition-colors flex items-center justify-center"
                            onClick={() => props.onClose()}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
