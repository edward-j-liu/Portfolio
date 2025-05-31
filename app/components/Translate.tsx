"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import {RefObject, useRef} from "react";

export function WindowTranslate({children, translate, range}:{children:React.ReactNode, translate:number[], range:number[]}) {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({target: targetRef, offset:["end start", "start end"]});
    const y = useTransform(scrollYProgress, range, translate);
    return (

            <motion.div
                style={{y}}
                className={"w-full justify-center align-center items-center flex"}
                ref={targetRef}
            >
                {children}
            </motion.div>
    )
}

export function Translate({children,translate, range, scrollContainerRef}:{children:React.ReactNode, translate:number[], range:number[], scrollContainerRef:RefObject<HTMLElement | null>}) {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        container: scrollContainerRef,
        target: targetRef,
        offset: ["end start", "start end"],
        layoutEffect: false,
    });
    const y = useTransform(scrollYProgress, range, translate);
    return (

        <motion.div
            style={{y}}
            ref={targetRef}
        >
            {children}
        </motion.div>
    )
}
