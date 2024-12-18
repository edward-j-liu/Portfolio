"use client"
import {motion} from "framer-motion";
import {useState, useEffect} from "react";

export default function Nav({min}:{min: number}){
    const [lastScrollY, setLastScrollY] = useState(0);
    const [y,setY] = useState(-100);
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY < lastScrollY && window.scrollY > min) {
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
            transition={{ ease: "easeOut", duration: 0.7 }}
        >
            <nav
                className={
                    'flex flex-row justify-end gap-x-5 p-4 bg-slate-900 bg-opacity-95  border-slate-400' +
                    'uppercase text-white font-semibold gap-4'
                }
            >
                <a href="/" className={"hover:text-sky-300"}>Home</a>
                <a href="/offseason" className={"hover:text-sky-300"}>Competitions</a>
                <a href="/teaching" className={"hover:text-sky-300"}>Teaching</a>
                <a href="/" className={"hover:text-sky-300"}>Intake</a>
            </nav>
        </motion.div>)
}
