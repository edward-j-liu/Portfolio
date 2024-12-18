import Image from "next/image";
import Nav from "@/app/components/Nav";
import Shrinker from "@/app/components/Shrinker";

export default function OffseasonPage(){
    return(
        <div>
            <Nav min={30}/>
        <div className={"flex flex-col bg-white"}>
            <div className={"flex w-screen bg-stands bg-cover bg-fixed bg-bottom items-center justify-center"}>
                <div className={"text-white text-9xl align-middle py-20"}>
                    <Shrinker text={"Offseason Competitions"} big={1} small={0.8} top={0} bottom={500}/>
                </div>

            </div>
            <div className={"md:px-52 sm:px-40 md:pt-20 sm:pt-10 text-2xl pb-40"}>
            <p className={"py-7"}>The most stressful part of robotics this year was the offseason competitions. Not only did I have an immense amount of responsibilities on the two-three days of the competitions, all the while I would also be falling behind on homework from other classes.
            </p>

            <div className={"flex flex-row"}>
                <p className={"py-7 mr-2"}>As the scouting lead, I was to keep track of 12 (or more) rowdy students, some
                    were older than me, most were my peers. This made me sympathize with wanting to play games, yet I
                    still had to push them to scout. I tried to make schedules more lenient so that they would have longer breaks, but sometimes there was simply not enough manpower to do so. Not only did I have to ensure the data was being collected, I would also have to be vigilant for clearly wrong data. Because many students were new to robotics, I also had to teach
                    them the rules game and how to use the app, which is becoming more complicated for the sake of more complete
                    data. Outside of competitions, I made a couple of QOL changes to the scouting app app.
                </p>
                <Image height={400} width={180} src={"/backs/eaglescout.jpeg"} alt={"eaglescout"}
                       className={"rounded-xl"} quality={100}/>
            </div>
                <p className={"py-7"}>In addition to my normal responsibilities as a scouting lead,
                </p>
            <p className={"py-7"}>This year, for the first time, we had a dedicated pit strategist, Zoe Cheng. I worked
                with Zoe to analyze data and come up with match strategies and things to look out for, and she would
                later pass this information to our drive team and our alliance members. This was challenging in the
                beginning of each competition, when we had less data to work off of. However, it proved to be a
                worthwhile effort, as we were pretty successful when our robot was working.
            </p>
            <p className={"py-7"}> It was not all bad, however, every travel competition came with the opportunity to get to know the team better, to mess about in the hotel lobby. This year, I was proud to continue the tradition of Team 114 apple cider, and nightly mahjong games.
            </p>
            <div className={"flex flex-col py-5 content-center items-center"}>
                <Image height={1000} width={1000} src={"/backs/mahjong.jpeg"} alt={"mahjong"}
                       className={"rounded-xl justify-self-center"} quality={100}/>
                <p className={"py-3 justify-self-center"}>Absolutely fire starting hand (I lost this game)</p>
            </div>
            </div>
        </div>
        </div>
    )
}
