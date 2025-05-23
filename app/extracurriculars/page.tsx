"use client";
import Nav from "@/app/components/Nav";
import Quotes from "@/app/components/Quotes";
import Image from "next/image";
import Back from "@/app/components/Back"
import {SimpleGlow, Glow, GlowContainer} from "@/app/components/Glow";
import {extracurriculars, event} from "@/app/data/extracurriculars"
import Shrinker from "@/app/components/Shrinker"
import Modal from "@/app/components/Modal";
import {useRef, useState} from "react";

function Card({thing}:{thing:event}){
    const color = thing.for === "Mock Trial" ? "rgb(227, 99, 25)" : thing.for === "Robotics" ? "rgb(0, 103, 237)" : thing.for === "Archery" ? "rgb(10, 120, 0)" : "rgb(200,200,200)"
    // const border = thing.for === "Mock Trial" ? "rgb(154,73,26)" : thing.for === "Robotics" ? "rgb(25,86,166)" : thing.for === "Archery" ? "rgb(16,77,10)" : "rgb(159,159,159)"
    return(
        <Glow styling={"rounded-2xl sm:w-2/3 w-full p-[2] bg-zinc-900 color-white"} color={color} strength={'90%'}>
            <div className={"rounded-2xl w-full h-full bg-zinc-900 p-6 opacity-1 hover:opacity-[0.90]"}>
                <div className={"w-full grid grid-cols-2 content-start"}>
                    <div className={"align-self-end"}><p className={'font-light text-sm'} style={{color: color}}>{thing.for}</p></div>
                    <div className={"align-self-end text-right"}><p
                        className={"font-light text-sm text-zinc-500"}>{thing.date}</p></div>
                </div>
                <p className={"text-xl font-bold"}>{thing.title}</p>
                <p className={"mt-1 text-zinc-400"}>{thing.description}</p>
            </div>

        </Glow>
    )
}

export default function TeachingPage() {
    // const [roboticsIsOpen, setRoboticsIsOpen] = useState(false);
    // const [archeryIsOpen, setArcheryIsOpen] = useState(false);
    // const [mtIsOpen, setmtIsOpen] = useState(false);

    return (
        <div>
            <Nav min={0}/>
            <div
                className={"flex items-center flex-col font-white w-screen gap-3 bg-zinc-950 bg-dot-8-s-2-zinc-800 pb-3 px-3"}>
                <div
                    className={"flex align-center items-center justify-center md:text-8xl text-5xl text-white mb-12 w-screen py-32 bg-clouds bg-cover bg-fixed"}>
                    <Shrinker text={"extracurriculars"} top={0} bottom={400} big={0} small={130} />
                </div>
                {/*<button*/}
                {/*    onClick={() => setRoboticsIsOpen(true)}*/}
                {/*    className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition"*/}
                {/*>*/}
                {/*   <p className={"text-white"}>Robotics</p>*/}
                {/*    <div className={'flex flex-row text-white'}><p>Robotics is really cool. </p> <p>Learn more...</p></div>*/}
                {/*</button>*/}
                {/*/!*<div className={'md:p-14 p-6 flex items-center flex flex-col items-center gap-3'}>*!/*/}
                {/*<div className={"w-screen bg-red-400 h-2"}>*/}
                {/*<Modal isOpen={roboticsIsOpen} onClose={() => setRoboticsIsOpen(false)}>*/}
                {/*    /!*<SimpleGlow></SimpleGlow>*!/*/}
                {/*    <div className={"w-full h-full bg-white rounded-xl p-4 overflow-y-scroll"}>*/}
                {/*        <Shrinker text={"Extracurriculars"} top={0} bottom={100} big={0} small={80}/>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}
                {/*        <div className={"w-2/3"}>*/}
                {/*            <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>*/}
                {/*            <p className="mb-4 text-black">Sample text sample text</p>*/}
                {/*        </div>*/}


                {/*        <button*/}
                {/*            onClick={() => setRoboticsIsOpen(false)}*/}
                {/*            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"*/}
                {/*        >*/}
                {/*            Close*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</Modal>*/}
                {/*</div>*/}
                <GlowContainer>
                    {extracurriculars.map((unit, key) => {
                        return (
                            <Card thing={unit} key={key}/>
                        )
                    })}
                </GlowContainer>
                {/*</div>*/}
            </div>
            <Back/>
        </div>
    )
}


// <div className={"flex flex-col bg-white overflow-visible indent-12 text-slate-900"}>
//     <div className={"flex w-screen bg-disciples bg-cover bg-fixed bg-bottom items-center justify-center"}>
//         <div className={"text-white text-9xl align-middle py-20"}>
//             <Shrinker text={"Teaching"} big={1} small={0.8} top={0} bottom={500}/>
//         </div>
//     </div>
//     <div className={"md:px-52 sm:px-40 md:pt-20 sm:pt-10 text-2xl pb-20"}>
//         <p className={"py-3"}>This year, four new robotics members were put in my charge, against the best
//             judgement of everybody else. I was tasked with extracurriculars them code that I had learned but one
//             year prior. The disciples had varying levels of prior code knowledge, some had coded with
//             robotics before, some had never taken an CS class ever.
//         </p>
//         <p className={"py-3"}>I named this group The Disciples, and taught them PID and Feedforward motion
//             controls, the core of robot code. To do this, I had to teach them object-oriented programming,
//             which is an sisyphean task.
//         </p>
//         <div className={"my-9 p-4 bg-slate-900 rounded-xl"}>
//             <p className={"text-6xl py-5 text-white"}>PID</p>
//             <div className={"flex flex-col py-5 content-center items-center"}>
//                 <Image height={900} width={900} src={"/backs/PID.png"} alt={"PID"}
//                        className={"rounded-xl justify-self-center"} quality={100}/>
//                 <p className={"py-3 justify-self-center text-white"}>Explanation for what each of the constants do</p>
//             </div>
//         </div>
//         <p>PID a simple motion controller that stands for Proportion, integral, and Derivative. The goal of
//             PID is to output a voltage based on a distance to a desired position. The amount of voltage is
//             proportional to the distance, meaning the further away the motor is, the faster it goes. The
//             derivative reduces the amount of oscillation by slowing down when error is changing slower. As
//             for integral portion, if the distance is constantly just a little bit off, eventually, it will
//             accumulate and push to hit the goal.
//         </p>
//         <div className={"my-9 p-4 bg-slate-900 rounded-xl"}>
//             <p className={"text-6xl py-5 text-white"}>FeedForward</p>
//             <div className={"flex flex-col py-5 content-center items-center"}>
//                 <Image height={900} width={900} src={"/backs/FeedForward.png"} alt={"PID"}
//                        className={"rounded-xl justify-self-center"} quality={100}/>
//                 <p className={"py-3 justify-self-center text-white"}>Trapezoidal Motion</p>
//             </div>
//         </div>
//         <p className={"py-3"}>Unlike PID which is a feedback system, FeedForward is a Feedforward system, meaning it
//             predicts
//             before hand the path and voltages to take. After taking an initial measurement of current
//             position and goal a trapezoid is constructed by working with constants. This trapezoid models
//             velocity over time, with the area under the trapezoid being the distance desired to be traveled.
//             Then, the motor follows the trapezoid, accelerating and decelerating when necesary. Before T1, it
//             accelerates as much as possible. After, T1, it reaches its max speed and coasts until T2, when it starts
//             decelerating. Then, it stops at what should be the intended position.
//         </p>
//         <p className={"py-3"}>The disciples are the most difficult challenge any class has offered me. Teaching was
//             difficult due to the varied code experience, and I struggled to find a balance of how fast to go as to not
//             leave people without work while not leaving others behind. Unfortunately, many also struggle with addiction
//             to mobile games. Rehabilitation programs have failed to yield results. I also had to relearn a lot of the
//             curriculum (that was made up on the spot) in order to be able to teach it in understandable terms. However
//             the results of extracurriculars them have been very rewarding.</p>
//         <p className={"py-3"}>Here are some quotes I did not force them to give:</p>
//     </div>
//     <Quotes/>
//
// </div>
