"use client"
import Nav from "@/app/components/Nav";
import Shrinker from "@/app/components/Shrinker";
import Back from "@/app/components/Back";
import {useEffect} from "react";
import { redirect } from 'next/navigation'


export default function CodePage() {
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 695 && window.scrollY < 1000) {
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
        <div className={"flex flex-col bg-white indent-12"}>
            <div className={"flex w-screen bg-glass bg-cover bg-fixed bg-bottom items-center justify-center"}>
                <div className={"text-white text-9xl align-middle py-20"}>
                    <Shrinker text={"Code"} big={1} small={0.8} top={0} bottom={500}/>
                </div>
            </div>
            <div className={"md:px-52 sm:px-40 py-32 text-3xl"}>
                <p>
                    Most of my time doing code this offseason were small changes to the app, or coding examples for/with
                    the disciples. I plan to stop procrastinating on adding to the team114.org website, though that&apos;s not robot nor app code. Because it challenged my web development skills and knowledge, arguably my biggest coding project this off-season is the following portfolio:
                </p>
            </div>
            <div className={"bg-intro h-screen w-screen bg-cover bg-fixed bg-middle items-center justify-center"}>
                <div className={"pt-72 text-white text-9xl"}>
                    <Shrinker big={0.85} small={1} top={0} bottom={400} text={"Hello, my name is Edward Liu"}/>
                </div>
            </div>
        </div>
        <Back/>
    </div>)
}
