"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {useRef, useState, createContext, useContext, useEffect} from "react";

export function SimpleGlow({ children, styling, color}: { children: React.ReactNode, styling:string, color:string}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [onCard, setOnCard] = useState(false);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top} = e.currentTarget.getBoundingClientRect();
        // mouseX.set(e.clientX - left);
        // mouseY.set(e.clientY - top);
        setOnCard(true);
        mouseX.set(e.clientX-left);
        mouseY.set(e.clientY-top);
    };

    const handleMouseLeave = () => {
        setOnCard(false);
    };

    const background = onCard ? useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 100%)` : useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, transparent 50%)`;

    return (
        <div className={"relative flex overflow-hidden " + styling}>
            <motion.div
                className="absolute inset-0 pointer-events-none "
                style={{ background }}
            />
            <div
                className="relative flex grow h-full w-full items-center justify-center z-10"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
        </div>
    );
}

const MouseContext = createContext<{ x: number; y: number }>({ x: 0, y: 0 });

export function GlowContainer({children}: {children: React.ReactNode}) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return(
        <MouseContext.Provider value={position}>
            {children}
        </MouseContext.Provider>
    )
}

export function Glow({ children, styling, color, strength}: { children: React.ReactNode, styling:string, color:string, strength:string}) {
    const mouse = useContext(MouseContext);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updatePosition = () => {
            // const element = document.getElementById("sus");
            // if (element) {
            //     const { left, top } = element.getBoundingClientRect();
            //     x.set(mouse.x - left);
            //     y.set(mouse.y - top);
            // }
            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            x.set(mouse.x - rect.left);
            y.set(mouse.y - rect.top);
        };
        updatePosition();
    }, [mouse.x, mouse.y, x, y]);

    const background = useMotionTemplate`radial-gradient(400px circle at ${x}px ${y}px, ${color}, transparent ${strength})`;

    return (
        <div className={"relative flex overflow-hidden " + styling}
             ref={containerRef}
        >
            <motion.div
                className="absolute inset-0 pointer-events-none "
                style={{ background }}
            />
            <div
                className="relative flex grow h-full w-full items-center justify-center z-10"
                id="sus"
            >
                {children}
            </div>
        </div>
    );
}
