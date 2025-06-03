"use client"
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import {Translate} from "./components/Translate"
import {useRef} from "react";


export default function Home() {
    const container = useRef<HTMLDivElement | null>(null);

    return (
        <div className={"text-blue-950 w-screen h-screen bg-white snap-y snap-mandatory overflow-y-scroll"} ref={container}>
            <Nav min={500}/>
            <div
                className={"text-white justify-center px-10 md:text-9xl text-6xl font-bold bg-intro h-screen w-screen bg-cover bg-fixed bg-middle flex flex-col snap-start snap-always"}>
                {/*<Translate big={1} small={0.1} top={0} bottom={100} text={"Hello, my name is"}/>*/}
                {/* <Translate big={1} small={0.1} top={0} bottom={100} text={"Edward Liu"}/>*/}
                <Translate range={[-1, 0.5, 1.5]} translate={[500, 0, -1800]} scrollContainerRef={container}>
                    <p className={"pl-6 pb-2"}>Hello, my name is</p>
                    <p className={"pl-6"}>Edward Liu</p>
                </Translate>
            </div>
            <div className={'flex justify-self-center color-white'} style={{marginTop:-90}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="white"
                     viewBox="0 0 16 16">
                    <path
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
            <div
                className={"w-screen min-h-full  bg-white py-12 md:px-32 sm:px-14 px-4 snap-start snap-always flex-col flex grow justify-center"}>
                <p className={"md:text-4xl sm:text-3xl text-2xl pb-4"}>Welcome to my Portfolio!</p>
                <p className={"md:text-2xl sm:text-xl"}>My name is Edward Liu, Class of 26’ at Los Altos High School.
                    This portfolio is meant to be a neat little showcase of the things I have done and who I am as a
                    person. I hope you explore it thoroughly, I put a lot of effort into many of the smaller details.
                </p>
                <div className={"pt-12"}>
                    <Projects/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
