"use client"
import Nav from "@/app/components/Nav";
import {WindowTranslate} from "@/app/components/Translate";
import Back from "@/app/components/Back";
import {useEffect} from "react";
import { redirect } from 'next/navigation'


export default function CodePage() {
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 200) {
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
                    <WindowTranslate range={[0,1]} translate={[2,-2]}><p>Hobbies</p></WindowTranslate>
                </div>
            </div>
            <div className={"md:py-40 sm:py-32 py-10 md:px-40 sm:px-24 px-10 text-2xl"}>
                <p>
                    It&#39;s often said that if you do what you love, you&#39;ll never have to work a day in your life.
                    Although I don&#39;t have a job, I consider my extracurriculars to be my hobbies in a similar sense.
                    In my free time however, I enjoy playing videogames like a proper teenager. Besides this, I also like to collect pens and watches. I design and build my own watches using movements from common third party movement manufacturers, such as Seiko and ETA, as well as parts from eBay and Aliexpress. Finally, I enjoy web design, and in addition to designing most of the team114.org website,
                    I also love adding small details to this portfolio:
                </p>
            </div>
            <div className={"bg-intro h-screen w-screen bg-cover bg-fixed bg-middle items-center justify-center"}>
                <div className={"pt-72 text-white text-9xl"}>
                    <div className={"text-white justify-center px-10 md:text-9xl text-6xl font-bold bg-intro h-screen w-screen bg-cover bg-fixed bg-middle flex flex-col snap-start snap-always"}>
                        {/*<Translate big={1} small={0.1} top={0} bottom={100} text={"Hello, my name is"}/>*/}
                        {/* <Translate big={1} small={0.1} top={0} bottom={100} text={"Edward Liu"}/>*/}
                            <p className={"pl-6 pb-2"}>Hello, my name is</p>
                            <p className={"pl-6"}>Edward Liu</p>
                    </div>                </div>
            </div>
        </div>
        <Back/>
    </div>)
}
