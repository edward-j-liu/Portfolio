// import Image from "next/image";
import Nav from "@/app/components/Nav";
// import Translate from "@/app/components/Translate";
import Back from "@/app/components/Back";
import {education} from "@/app/data/education"
import {Glow, GlowContainer} from "@/app/components/Glow";
export default function OffseasonPage(){
    return(
        <div>
            <Nav min={0}/>
            <div className={"flex items-center flex-col md:p-14 p-6 text-white w-screen gap-3 bg-zinc-950 bg-dot-8-s-2-zinc-900"}>
                <p className={"text-center text-5xl md:8xl font-bold mb-4 text-white"}>Education</p>
                <p className={"text-xl sm:w-2/3 my-6 text-white"}>Grades don&#39;t define you, but everybody still asks about them anyways. Here you go</p>
                <GlowContainer>
                {education.map((year, key) => {
                        return (
                            <Glow key={key} styling={"rounded-2xl sm:w-2/3 w-full p-1 bg-zinc-900"} color={"rgb(200,200,220)"} strength={'70%'}>
                                <div className={"text-white rounded-2xl w-full h-full bg-zinc-900 p-6 opacity-1 hover:opacity-[0.95]"}>
                                    <p className={"text-2xl font-bold mb-12"}>{year.year}</p>
                                    <div className={"flex flex-col pt-4"}>
                                        {year.classes.map((unit, key)=>{
                                            return(
                                                <div key={key} className={"border-t-2 border-t-neutral-800 py-3 grid grid-cols-3"}>
                                                    <div className={"pl-2"}>
                                                        <p>{unit.name}</p>
                                                    </div>
                                                    <div className={"flex justify-center"}><p className={"text-center"}>{unit.grade}</p></div>
                                                    <div><p>{unit.school}</p></div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Glow>
                        )
                    })}</GlowContainer>
            </div>
            <Back/>
        </div>
    )
}


//{education.map((year, key) => {
//                         return (
//                             <SimpleGlow key={key} styling={"rounded-2xl w-2/3 p-[0.8]"} color={"rgb(230,230,250)"}>
//                                 <div className={"rounded-2xl w-full h-full bg-zinc-900 p-6 opacity-[0.95]"}>
//                                     <text className={"text-2xl font-bold mb-12"}>{year.year}</text>
//                                     <div className={"flex flex-col"}>
//                                         {year.classes.map((unit, key)=>{
//                                             return(
//                                                 <div key={key} className={"border-t-2 border-t-neutral-800 py-3 grid grid-cols-3"}>
//                                                     <div>
//                                                         <text>{unit.name}</text>
//                                                     </div>
//                                                     <div><text>{unit.grade}</text></div>
//                                                     <div><text>{unit.school}</text></div>
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
//                                 </div>
//                             </SimpleGlow>
//                         )
//                     })}
