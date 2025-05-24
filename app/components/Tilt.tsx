"use client";

import { useState} from "react";

export default function Tilt({children}: Readonly<{ children: React.ReactNode; }>){
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 18; // Max tilt ±15 degrees
        const y = ((e.clientY - top) / height - 0.5) * 18;

        setTilt({ x, y });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <div
            className="flex grow items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
        <div
            className={"transition-transform duration-10 ease-out flex items-center justify-center"}
            style={{transform: `perspective(500px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`,}}>
            {children}
        </div>
    </div>
);
}
