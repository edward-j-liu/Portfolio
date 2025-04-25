import Shrinker from "@/app/components/Shrinker";
import Nav from "@/app/components/Nav";
import Quotes from "@/app/components/Quotes";
import Image from "next/image";
import Back from "@/app/components/Back"

export default function TeachingPage(){
    return(
        <div>
            <Nav min={0}/>
            <div className={"flex flex-col bg-white overflow-visible indent-12 text-slate-900"}>
                <div className={"flex w-screen bg-disciples bg-cover bg-fixed bg-bottom items-center justify-center"}>
                    <div className={"text-white text-9xl align-middle py-20"}>
                        <Shrinker text={"Teaching"} big={1} small={0.8} top={0} bottom={500}/>
                    </div>
                </div>
                <div className={"md:px-52 sm:px-40 md:pt-20 sm:pt-10 text-2xl pb-20"}>
                    <p className={"py-3"}>This year, four new robotics members were put in my charge, against the best
                        judgement of everybody else. I was tasked with teaching them code that I had learned but one
                        year prior. The disciples had varying levels of prior code knowledge, some had coded with
                        robotics before, some had never taken an CS class ever.
                    </p>
                    <p className={"py-3"}>I named this group The Disciples, and taught them PID and Feedforward motion
                        controls, the core of robot code. To do this, I had to teach them object-oriented programming,
                        which is an sisyphean task.
                    </p>
                    <div className={"my-9 p-4 bg-slate-900 rounded-xl"}>
                    <p className={"text-6xl py-5 text-white"}>PID</p>
                    <div className={"flex flex-col py-5 content-center items-center"}>
                        <Image height={900} width={900} src={"/backs/PID.png"} alt={"PID"}
                               className={"rounded-xl justify-self-center"} quality={100}/>
                        <p className={"py-3 justify-self-center text-white"}>Explanation for what each of the constants do</p>
                    </div>
                    </div>
                    <p>PID a simple motion controller that stands for Proportion, integral, and Derivative. The goal of
                        PID is to output a voltage based on a distance to a desired position. The amount of voltage is
                        proportional to the distance, meaning the further away the motor is, the faster it goes. The
                        derivative reduces the amount of oscillation by slowing down when error is changing slower. As
                        for integral portion, if the distance is constantly just a little bit off, eventually, it will
                        accumulate and push to hit the goal.
                    </p>
                    <div className={"my-9 p-4 bg-slate-900 rounded-xl"}>
                        <p className={"text-6xl py-5 text-white"}>FeedForward</p>
                        <div className={"flex flex-col py-5 content-center items-center"}>
                            <Image height={900} width={900} src={"/backs/FeedForward.png"} alt={"PID"}
                                   className={"rounded-xl justify-self-center"} quality={100}/>
                            <p className={"py-3 justify-self-center text-white"}>Trapezoidal Motion</p>
                        </div>
                    </div>
                    <p className={"py-3"}>Unlike PID which is a feedback system, FeedForward is a Feedforward system, meaning it predicts
                        before hand the path and voltages to take. After taking an initial measurement of current
                        position and goal a trapezoid is constructed by working with constants. This trapezoid models
                        velocity over time, with the area under the trapezoid being the distance desired to be traveled.
                        Then, the motor follows the trapezoid, accelerating and decelerating when necesary. Before T1, it accelerates as much as possible. After, T1, it reaches its max speed and coasts until T2, when it starts decelerating. Then, it stops at what should be the intended position.
                    </p>
                    <p className={"py-3"}>The disciples are the most difficult challenge any class has offered me. Teaching was difficult due to the varied code experience, and I struggled to find a balance of how fast to go as to not leave people without work while not leaving others behind. Unfortunately, many also struggle with addiction to mobile games. Rehabilitation programs have failed to yield results. I also had to relearn a lot of the curriculum (that was made up on the spot) in order to be able to teach it in understandable terms. However the results of teaching them have been very rewarding.</p>
                    <p className={"py-3"}>Here are some quotes I did not force them to give:</p>
                </div>
                <Quotes />

            </div>
            <Back />

        </div>
    )
}
