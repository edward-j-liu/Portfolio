"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {useState} from "react";
import {education} from "@/app/data/education"


export default function Glow() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top} = e.currentTarget.getBoundingClientRect();
        // mouseX.set(e.clientX - left);
        // mouseY.set(e.clientY - top);
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };


    const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgb(230,230,250), transparent 100%)`;

    return (
        <div className={"flex items-center flex-col gap-8"}
             onMouseMove={handleMouseMove}>
            <motion.div
                className="absolute inset-0 pointer-events-none "
                style={{background}}
            />
            {education.map((year, key) => {
                return (
                    <div className={"relative flex overflow-hidden rounded-2xl w-2/3 p-[0.8]"} key={key}>

                        <div
                            className="relative flex grow h-full w-full items-center justify-center z-10">
                            <div className={"rounded-2xl w-full h-full bg-zinc-900 p-6 opacity-[0.95]"}>
                                <text className={"text-2xl font-bold mb-12"}>{year.year}</text>
                                <div className={"flex flex-col"}>
                                    {year.classes.map((unit, key) => {
                                        return (
                                            <div key={key}
                                                 className={"border-t-2 border-t-neutral-800 py-3 grid grid-cols-3"}>
                                                <div>
                                                    <text>{unit.name}</text>
                                                </div>
                                                <div>
                                                    <text>{unit.grade}</text>
                                                </div>
                                                <div>
                                                    <text>{unit.school}</text>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    );
}
