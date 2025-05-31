"use client"
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import Link from 'next/link'

export default function Nav({min}:{min: number}){
    const [lastScrollY, setLastScrollY] = useState(0);
    const [y,setY] = useState(-100);
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY <= lastScrollY && window.scrollY > min) {
                setY(0);
            } else {
                setY(-100);
            }
            setLastScrollY(window.scrollY);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return(
        <motion.div
            className={'w-screen fixed bg-slate-900 z-40 border-b-2'}
            animate={{y}}
            transition={{ ease: "easeOut", duration: 0.6 }}
        >
            <nav
                className={
                    'flex flex-row justify-end gap-x-5 p-4 bg-slate-900 bg-opacity-95  border-slate-400' +
                    'uppercase text-white font-semibold gap-4'
                }
            >
                <Link href="/" className={"hover:text-sky-300"}>Home</Link>
                <Link href="/education" className={"hover:text-sky-300"}>Education</Link>
                <Link href="/extracurriculars" className={"hover:text-sky-300"}>Extracurriculars</Link>
                <Link href="/hobbies" className={"hover:text-sky-300"}>Hobbies</Link>
            </nav>
        </motion.div>)
}
