import Image from "next/image";
import Tilt from "./Tilt"

export default function Projects(){
    return(
        <div className={"grid grid-cols-3 w-full lg:gap-x-16 sm:gap-x-4 gap-x-1"}>
            <Tilt>
            <div className={"relative w-full aspect-square hover:shadow-green-900 hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <a href={"/education"}>
                <p className={"absolute inset-0 flex items-center justify-center md:text-2xl sm:text-xl text-white bg-black bg-opacity-30 rounded-3xl"}>Education</p>
                <Image height={400} width={400} src={"/backs/lamongus.jpg"} alt={"leaves"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                </a>
            </div>
            </Tilt>
            <Tilt>
            <div
                className={"relative w-full aspect-square hover:shadow-red-900 hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <a href={"/extracurriculars"}>
                <p className={"absolute inset-0 flex items-center justify-center md:text-2xl text-white bg-black bg-opacity-30 rounded-3xl"}>Extracurriculars</p>
                <Image height={400} width={400} src={"/backs/archery.jpg"} alt={"archery"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                </a>
            </div>
            </Tilt>
            <Tilt>
            <div
                className={"relative w-full aspect-square hover:shadow-black hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <a href={"/code"}>
                <p className={"absolute inset-0 flex items-center justify-center sm:text-2xl text-white bg-black bg-opacity-30 rounded-3xl"}>Hobbies</p>
                <Image height={400} width={400} src={"/backs/code.png"} alt={"Code"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                </a>
            </div>
            </Tilt>
        </div>
    )
}
