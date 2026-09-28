"use client"
import Linkgrid from "./components/Linkgrid";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import {Translate} from "./components/Translate"
import {useRef} from "react";

import {Space_Grotesk} from 'next/font/google'

const space = Space_Grotesk({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {
    const container = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={container}
            className="text-blue-950 w-full h-dvh bg-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden"
        >
            <Nav min={500} />

            <section
                className={`${space.className} relative text-white justify-center px-6 sm:px-10 text-5xl sm:text-7xl md:text-9xl bg-intro h-dvh w-full bg-cover bg-center md:bg-fixed flex flex-col snap-start snap-always`}
            >
                <Translate range={[-1, 0.5, 1.5]} translate={[500, 0, -1800]} scrollContainerRef={container}>
                    <p className="pl-2 sm:pl-6 pb-2 font-bold">Hello, my name is</p>
                    <p className="pl-2 sm:pl-6 font-bold">Edward Liu</p>
                </Translate>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
                        fill="white"
                        viewBox="0 0 16 16"
                    >
                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
            </section>

            <section
                className="w-full min-h-dvh bg-white py-12 md:px-32 sm:px-14 px-4 snap-start snap-always flex flex-col justify-center"
            >
                <p className="text-2xl sm:text-3xl md:text-4xl pb-4">Welcome to my Portfolio!</p>
                <p className="text-base sm:text-xl md:text-2xl leading-relaxed">
                    My name is Edward Liu, I&#39;m a student studying Data Science and Statistics at
                    University of California, Santa Barbara. My interests lie at the intersection of
                    statistics, machine learning, and software engineering, particularly in applications
                    where quantitative insight can create meaningful real-world impact. From research in
                    biomedical and healthcare data to developing software for competitive robotics, I seek
                    out challenging problems where I can learn quickly, contribute meaningfully, and turn
                    ideas into results.
                </p>

                <div className="pt-12">
                    <Linkgrid />
                    <Footer />
                </div>
            </section>
        </div>
    );
}
