import Image from "next/image";

export default function Projects(){
    return(
        <div className={"grid grid-cols-3 w-full"}>
            <div className={"relative w-2/3 aspect-square hover:shadow-blue-900 hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <a href={"/offseason"}>
                <p className={"absolute inset-0 flex items-center justify-center text-2xl text-white bg-black bg-opacity-30 rounded-3xl"}> Offseason
                    Competitions</p>
                <Image height={400} width={400} src={"/offseason.jpg"} alt={"offeseason competitions"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                </a>

            </div>
            <div
                className={"relative w-2/3 aspect-square hover:shadow-green-900 hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <a href={"/teaching"}>
                <p className={"absolute inset-0 flex items-center justify-center text-2xl text-white bg-black bg-opacity-30 rounded-3xl"}>Teaching</p>
                <Image height={400} width={400} src={"/backs/lamongus.jpg"} alt={"teaching"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                </a>
            </div>
            <div
                className={"relative w-2/3 aspect-square hover:shadow-black hover:shadow-2xl rounded-3xl hover:scale-110 justify-self-center"}>
                <p className={"absolute inset-0 flex items-center justify-center text-xl text-white bg-black bg-opacity-30 rounded-3xl"}> Code Projects</p>
                <Image height={400} width={400} src={"/backs/code.png"} alt={"Code"}
                       className={"object-contain aspect-square rounded-3xl"} quality={100}/>

            </div>
        </div>
    )
}
