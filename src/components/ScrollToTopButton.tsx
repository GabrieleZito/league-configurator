"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect((): (() => void) => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed right-6 bottom-6 z-50 rounded-full bg-amber-500 p-3 text-white shadow-lg transition-all ${visible ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"} `}
            aria-label="Torna in cima"
        >
            ↑
        </button>
    );
}
