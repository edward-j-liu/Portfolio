import Image from "next/image";
import Tilt from "./Tilt"

export default function Linkgrid(){
    return(
        <div className={"grid grid-cols-3 w-full lg:gap-x-10 sm:gap-x-4 gap-x-1 lg:text-4xl md:text-2xl sm:text-xl text-white"}>
            <Tilt>
            <div className={"relative w-full aspect-square hover:shadow-green-900 hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <a href={"/experience"}>
                <p className={"absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-3xl"}>Experience</p>
                <Image height={400} width={400} src={"/backs/leavessquare.jpg"} alt={"leaves"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                </a>
            </div>
            </Tilt>
            <Tilt>
            <div
                className={"relative w-full aspect-square hover:shadow-red-900 hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <a href={"/resume"}>
                <p className={"absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-30 rounded-3xl"}>Resume</p>
                <Image height={400} width={400} src={"/backs/archery.jpg"} alt={"archery"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                </a>
            </div>
            </Tilt>
            <Tilt>
            <div
                className={"relative w-full aspect-square hover:shadow-black hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <a href={"/hobbies"}>
                <p className={"absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-3xl"}>Hobbies</p>
                <Image height={400} width={400} src={"/backs/watch.jpg"} alt={"watch"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                </a>
            </div>
            </Tilt>
        </div>
    )
}
