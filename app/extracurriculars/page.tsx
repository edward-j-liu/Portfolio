"use client";
import Nav from "@/app/components/Nav";
// import Quotes from "@/app/components/Quotes";
import Image from "next/image";
import Back from "@/app/components/Back"
import {Glow, GlowContainer} from "@/app/components/Glow";
import {extracurriculars, event} from "@/app/data/extracurriculars"
import {Translate, WindowTranslate} from "@/app/components/Translate"
import Modal from "@/app/components/Modal";
import {useRef, useState} from "react";

function Card({thing}:{thing:event}){
    const color = thing.for === "Mock Trial" ? "rgb(227, 99, 25)" : thing.for === "Robotics" ? "rgb(0, 103, 237)" : thing.for === "Archery" ? "rgb(10, 120, 0)" : "rgb(200,200,200)"
    // const border = thing.for === "Mock Trial" ? "rgb(154,73,26)" : thing.for === "Robotics" ? "rgb(25,86,166)" : thing.for === "Archery" ? "rgb(16,77,10)" : "rgb(159,159,159)"
    return(
        <Glow styling="rounded-2xl sm:w-2/3 w-full bg-zinc-900 color-white" color={color} strength={'90%'}>
            <div className={"rounded-2xl w-full h-full bg-zinc-900 p-6 opacity-1 hover:opacity-[0.90]"} style={{margin:'2px'}}>
                <div className={"w-full grid grid-cols-2 content-start"}>
                    <div className={"align-self-end"}><p className={'font-light text-sm'} style={{color: color}}>{thing.for}</p></div>
                    <div className={"align-self-end text-right"}><p
                        className={"font-light text-sm text-zinc-500"}>{thing.date}</p></div>
                </div>
                <p className={"text-xl font-bold text-white"}>{thing.title}</p>
                <p className={"mt-1 text-zinc-400"}>{thing.description}</p>
            </div>

        </Glow>
    )
}

export default function TeachingPage() {
    const [roboticsIsOpen, setRoboticsIsOpen] = useState(false);
    const [archeryIsOpen, setArcheryIsOpen] = useState(false);
    const [mtIsOpen, setmtIsOpen] = useState(false);
    const roboticsModal = useRef<HTMLDivElement | null>(null);


    return (
        <div>
            <Nav min={0}/>
            <div
                className={"flex items-center flex-col font-white w-screen gap-3 bg-zinc-950 bg-grid-10-s-1-zinc-900 pb-16 px-3"}>
                <div
                    className={"align-center md:text-8xl text-5xl text-white mb-12 w-screen py-32 bg-clouds bg-cover bg-fixed items-center justify-center text-center font-bold"}>
                    <WindowTranslate translate={[120,-300]} range={[-0.5,1.5]}><p>Extracurriculars</p></WindowTranslate>
                </div>
                <p className={"font-white text-2xl"}>I have some extracurriculars. They&#39;re pretty cool.</p>
                <div className={"grid grid-cols-3 w-2/3 lg:gap-x-16 sm:gap-x-4 gap-x-1 py-8"}>
                    <button
                        onClick={() => setRoboticsIsOpen(true)}
                        className="bg-zinc-900 text-white p-6 rounded-xl hover:border-2 hover:bg-zinc-950 border border-blue-600 transition aspect-3/2 relative text-left flex flex-col"
                    >
                        <p className={"text-3xl pb-3"}>Robotics</p>
                        <p>Robotics is really cool. I participate in FRC, or First Robotics Competition. In this
                            competition, teams compete to quickly design and build a robot for the years game.</p>
                        <p className={"text-slate-400"}>Learn more...</p>
                    </button>
                    <button
                        onClick={() => setmtIsOpen(true)}
                        className="bg-zinc-900 text-white p-6 rounded-xl hover:border-2 hover:bg-zinc-950 border border-orange-600 transition aspect-3/2 relative text-left flex flex-col"
                    >
                        <p className={"text-3xl pb-3"}>Mock Trial</p>
                        <p>In the California Mock Trial competition, students have to prepare both a defense and
                            prosecution case based on a case packet with affidavits and evidence.</p>
                        <p className={"text-slate-400"}>Learn more...</p>
                    </button>
                    <button
                        onClick={() => setArcheryIsOpen(true)}
                        className="bg-zinc-900 text-white p-6 rounded-xl hover:border-2 hover:bg-zinc-950 border border-green-800 transition aspect-3/2 relative text-left flex flex-col"
                    >
                        <p className={"text-3xl pb-3"}>Archery</p>
                        <p>You shoot arrows at the target.</p>
                        <p className={"text-slate-400"}>Learn more...</p>

                    </button>
                </div>
                <Modal isOpen={mtIsOpen} onClose={() => setmtIsOpen(false)}>
                    <div
                        className={"flex flex-col relative w-full h-full bg-white rounded-xl p-8 overflow-y-scroll text-black"}
                        ref={roboticsModal}>
                        <h2 className="text-3xl text-black font-bold mb-4">Mock Trial</h2>
                        <p className="mb-4 text-black">Ever since watching a playthrough of Ace Attorney during the
                            breaks of my online school (I do not have any game consoles), I have wanted to do Mock
                            Trial. The logic and deductive reasoning has always appealed to me. Therefore, Mock Trial
                            club was the very first high school club I joined.</p>
                        <p className="mb-4 text-black">Even though I was sick for the first couple meetings, I quickly
                            came to become immersed in the case theory and characters of that year&#39;s case packet:
                            the shady defendant, hapless witness, and tough cop, all spoke to me.
                        </p>
                        <p className="mb-4 text-black">What kept me coming back year after year, however, wasn&#39;t the
                            feeling of nailing a witness with cutting cross examination questions, nor delivery a killer
                            argument in closing statements. It was the community of friends that I work with and even
                            helped grow. As one of the most involved members of Mock Trial and eventually co-president,
                            I grew with the people in my year, and helped teach the people afterwards.</p>
                        <div className={'m-4 mb-3 center self-center'}>
                        <Image
                            src={'/backs/mocktrialdefense.png'} alt={"mocktrial"} height={1328} width={780}
                            className={"rounded-xl mb-2"}/>
                        <p className={"text-slate-400 mb-4 text-center"}>Picture of Mock Trial Prosecution team before competition. I wonder which one is me</p></div>
                            <button
                                onClick={() => setmtIsOpen(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Close
                            </button>
                    </div>
                </Modal>
                <Modal isOpen={archeryIsOpen} onClose={() => setArcheryIsOpen(false)}>
                    <div
                        className={"flex flex-col relative w-full h-full bg-white rounded-xl p-8 overflow-y-scroll text-black"}
                        ref={roboticsModal}>
                        <h2 className="text-3xl text-black font-bold mb-4">Archery</h2>
                        <p className="mb-4 text-black">At archery, I shoot arrows at the target until they hit.</p>
                        <button
                            onClick={() => setArcheryIsOpen(false)}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
                <Modal isOpen={roboticsIsOpen} onClose={() => setRoboticsIsOpen(false)}>
                    <div
                        className={"flex flex-col relative w-full h-full bg-white rounded-xl p-8 overflow-y-scroll text-black"}
                        ref={roboticsModal}>
                        <h2 className="text-3xl text-black font-bold mb-4">Robotics</h2>
                        <p className="mb-4 text-black">I am a proud member of Robotics FRC team 114 Eaglestrike. It
                            is my school&#39;s robotics team, offered as a class. As 114&#39;s scouting and strategy
                            lead, I lead the team in collecting data about other robots. During competitions, I am often
                            first to arrive, and last to leave. I ensure sure data is as complete as possible by making
                            sure everybody scouts the matches I assigned them, and often fill in if a member is missing
                            (I believe in leading by example).
                        </p>
                        <p className="mb-44 text-black">In robotics, my projects mainly revolve around strategy and
                            app
                            code, with some side projects on the actual robot. For example, in the 2025 season
                            Reefscape, my first project was to code the scouting app to accomodate the new game, and
                            my second project was to help code the elevator mechanism.</p>
                        <div className={"flex flex-row items-center justify-center align-center justify-center gap-x-2 mb-44"}>
                            <div className={"p-6"}><Translate scrollContainerRef={roboticsModal} range={[-0.2, 1.2]}
                                                              translate={[50, -50]}><Image
                                src={'/backs/data.png'} alt={"data"} height={1716} width={818}
                                className={"rounded-xl"}/></Translate></div>
                            <div className={"justify-center align-middle flex flex-col"}>
                                <p className="mb-4 font-bold text-black text-xl">The scouting app</p>
                                <p className="mb-4 text-black">In FRC, the top scoring teams get to choose their
                                    alliance
                                    (made up of two other teams) for playoffs. During this process, it is important to
                                    know
                                    the
                                    strengths and weaknesses of other robots. The choice in robot could make or break
                                    your
                                    victory. Because of this, the scouting app, eaglescout, is
                                    my main project every year. Because teams other than just 114 use it, I that the
                                    pressure to update it is incredibly high.</p>
                                <p className="text-black">During my first year in control of app development I
                                    created
                                    some QOL changes that I had wanted to see prior. I have implemented a data
                                    aggregation,
                                    which allows you to see the performance of a given alliance (all three robots and
                                    their
                                    total). Additionally, I created this system in a way to be able to easily feed into
                                    an
                                    LLM to analyze the data once I figure out how it works.</p></div>
                        </div>
                        <div className={"flex flex-row items-center gap-x-2 mb-24"}>
                            <div className={"pr-8"}>
                                <p className="mb-4 font-bold text-black text-xl">The Elevator</p>
                                <p className="mb-4 text-black">I coded the elevator for the first reefscape robot,
                                    Loki
                                    (I don&#39;t think we ever settled on a name). I don&#39;t usually code on the
                                    robot, and this was a fun foray into robot code. It used basic motion profiles
                                    and an
                                    almost state machine.</p>
                                <p className="text-black">Unfortunately, because of the redesign and my inability
                                    to code java, I was unable to code the elevator on Theseus, the second robot of the year.</p>
                            </div>
                            <div className={"p-6"}><Translate scrollContainerRef={roboticsModal} range={[-0.2, 1.2]}
                                                              translate={[50, -50]}><Image
                                src={'/backs/elevator.png'} alt={"elevator"} height={645} width={570}
                                className={"rounded-xl"}/></Translate></div>
                        </div>
                        <button
                            onClick={() => setRoboticsIsOpen(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                </Modal>
                <h1 className={"font-bold text-6xl pt-6 pb-12"}>List of STUFF</h1>
                <GlowContainer>
                    {extracurriculars.map((unit, key) => {
                        return (
                            <WindowTranslate translate={[-80,-10,0,10,80]} key={key} range={[-0.2,0.2,0.5,0.8,1.2]}><Card thing={unit}/></WindowTranslate>
                        )
                    })}
                </GlowContainer>
            </div>
            <Back/>
        </div>
    )
}
