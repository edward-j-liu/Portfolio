"use client"

import {motion, useScroll, useTransform} from "framer-motion";
export default function Shrinker({text, big, small, top, bottom}:{text:string,big:number,small:number, top:number, bottom:number}) {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [top, bottom], [big, small]);
    return (

            <motion.h1
                style={{scale}}
                className={"align-middle font-bold text-center"}
            >
                <p>{text}</p>
            </motion.h1>
    )
}
