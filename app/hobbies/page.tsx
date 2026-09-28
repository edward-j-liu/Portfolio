"use client"
import Nav from "@/app/components/Nav";
import {Translate, WindowTranslate} from "@/app/components/Translate";
import Back from "@/app/components/Back";
import {useEffect} from "react";
import { redirect } from 'next/navigation'


export default function CodePage() {
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 400) {
                redirect("/")
            }
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        };
    });
    return(
    <div>
        <Nav min={0}/>
        <div className={"flex flex-col bg-white indent-12 text-slate-900"}>
            <div className={"flex w-screen bg-glass bg-cover bg-fixed bg-bottom items-center justify-center"}>
                <div className={"text-white text-9xl align-middle py-20 h-full w-full bg-black bg-opacity-40"}>
                    <WindowTranslate range={[0, 1]} translate={[2, -2]}><p>Hobbies</p></WindowTranslate>
                </div>
            </div>
            <div className={"md:py-40 sm:py-32 py-10 md:px-40 sm:px-24 px-10 text-2xl"}>
                <p>
                    Studying and learning new things is my enjoyment, but in my true free time, I enjoy playing video games and listening to music. I try to go to as many on campus clubs as possible. I&#39;ve gotten into Mahjong and Chess. Besides this, I also
                    like to collect fountain pens and watches. I design and build my own watches using movements from common
                    third party movement manufacturers, such as Seiko and ETA, as well as parts from eBay and
                    Aliexpress. All of the photos on this website were taken by me; I dabble in photography in my free time. Finally, I
                    enjoy web design.
                </p>

            </div>
            <section
                className={`relative text-white justify-center px-6 sm:px-10 text-5xl sm:text-7xl md:text-9xl bg-intro h-dvh w-full bg-cover bg-center md:bg-fixed flex flex-col snap-start snap-always`}
            >
                <div>
                    <p className="pl-2 sm:pl-6 pb-2 font-bold">Hello, my name is</p>
                    <p className="pl-2 sm:pl-6 font-bold">Edward Liu</p>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
                        fill="white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </section>
        </div>
        <Back/>
    </div>)
}
