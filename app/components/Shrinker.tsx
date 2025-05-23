"use client"

import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

export default function Shrinker({text, big, small, top, bottom}:{text:string,big:number,small:number, top:number, bottom:number}) {
    const scrollRef = useRef(null);
    const { scrollY } = useScroll({
        container: scrollRef,
    });
    const y = useTransform(scrollY, [top, bottom], [big, small]);
    return (

            <motion.h1
                style={{y}}
                className={"align-middle font-bold text-center"}
            >
                <p>{text}</p>
            </motion.h1>
    )
}
