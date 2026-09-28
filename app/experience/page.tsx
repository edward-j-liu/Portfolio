"use client";
import Nav from "@/app/components/Nav";
// import Quotes from "@/app/components/Quotes";
import Image from "next/image";
import {Glow, GlowContainer} from "@/app/components/Glow";
import {WindowTranslate} from "@/app/components/Translate"
import Back from "@/app/components/Back";



interface entry{
    title:string;
    at:string;
    date:string;
    description: React.ReactNode;
}

const research:entry[]=[
    {title: "Research Intern", at: "University of Southern California", date: "24-25", description: <div>
            <div className={"pl-4"}>

            <li>Under Professor Wei Wu at Department of Electrical and Computer Engineering</li>
            <li>Worked on AI detection of heart attack biomarkers using Raman spectroscopy</li>
            <li>Focused on data processing and model evaluation</li>
            <li>Published paper in ACS Applied Biomaterials</li>
            </div>
        </div>},
    {title: "Research Intern", at: "University of Michigan", date: "25-26", description: <div>
            <div className={"pl-4"}>

            <li>Research intern under Professor Ji Zhu at Department of Statistics</li>
            <li>Worked on generation of realistic & ethical synthetic health records using statistical models</li>
            <li>Self-studied Understanding Deep Learning by Simon Prince</li>
            </div>
        </div>}
]

const projects:entry[]=[
    {title: "Predicting Smartphone Addiction", at: "Kaggle", date: "26", description: <div>
            <div className={"pl-4"}>

            <li>Built a machine learning model to predict digital addiction using 691k records of user behavior</li>
            <li>Used regression imputation to estimate missing values from related variables and created new features</li>
            <li>Tested CatBoost, LightGBM, and XGBoost and used ensemble learning to combine their predictions into a stronger model, achieving a ROC-AUC of 0.9664</li>
            </div>
        </div>}
]

const hs:entry[]=[
    {title: "Scouting Lead", at: "FRC Team 114", date: "22-26", description: <div>
            <div className={"pl-4"}>
            <li>Developed and maintained Eaglescout, a scouting app that is used by multiple robotics teams across different countries with hundreds of users</li>
            <li>Managed 30+ team members’ jobs and roles during competitions</li>
            <li>Led strategy meetings during design process and competition based on collected data</li>
            </div>
            <Image
                src={'/backs/alliance.png'} alt={"speaking"} height={1328} width={780}
                style={{
                    width: '70%',   // Scales to the width of its parent container
                    height: 'auto',  // Maintains the correct aspect ratio automatically
                }}
                className={"rounded-3xl mb-2 justify-self-center py-3"}/>

        </div>},
    {title: "President", at: "LAHS Mock Trial Club", date: "22-26", description: <div>
            <div className={"pl-4"}>
            <li>Served as President of the Mock Trial Club.</li>
            <li>Organized practices, coordinated scrimmages, and reached out to volunteer attorney coaches.</li>
            <li>Developed case theories and presented arguments during competitions.</li>
            </div>
        </div>},
    {title: "Archery Coach", at: "Los Altos Hills Archery Club", date: "22-26", description: <div>
            <div className={"pl-4"}>

            <li>Certified Level 1 Coach with USA Archery</li>
            <li>Private lessons for kids aged 8-15 with hourly rate of $80</li>
                <li>Organized and coached archery camp with 40+ kids in summer 2025</li></div>
        </div>},
]

const education:entry[]=[
    {title: "LAHS", at: "2022-2026", date: "", description: <div>
            <p>4.46/4 GPA</p>
            <p>Coursework:</p>
            <div className={"pl-4"}>

            <li>Multivariable Calculus: Math 1C (Foothill College) and 1D (De Anza College),
                Discrete Math: Math 22 (Foothill College)</li>
                <li>AP Calculus BC (5), AP Physics C Mechanics (5), AP Physics C E&M(5), AP Statistics (5), AP Chemistry (5), etc</li>
            </div>
        </div>}
]

function Card({thing, color}:{thing:entry, color:string}){
    // const border = thing.for === "Mock Trial" ? "rgb(154,73,26)" : thing.for === "Robotics" ? "rgb(25,86,166)" : thing.for === "Archery" ? "rgb(16,77,10)" : "rgb(159,159,159)"
    return(
        <Glow styling="rounded-2xl sm:w-2/3 w-full bg-zinc-900 color-white" color={color} strength={'80%'}>
            <div className={"rounded-2xl w-full h-full p-6 opacity-1 hover:opacity-[0.95] bg-zinc-900"}
                 style={{margin: '2px'}}>
                <p className={"text-xl font-bold text-white"}>{thing.title}</p>
                <div className={"w-full grid grid-cols-2 content-start"}>
                    <div className={"align-self-end"}><p className={'font-light text-sm'} style={{color: color}}>{thing.at}</p></div>
                    <div className={"align-self-end text-right"}><p
                        className={"font-light text-sm text-zinc-500"}>{thing.date}</p></div>
                </div>
                <div className={"mt-1 text-zinc-200"}>{thing.description}</div>
            </div>
        </Glow>
    )
}

const translate = [-100, -15, 0, 15, 100]
const range = [-0.2, 0.2, 0.5, 0.8, 1.2]
const main_color = "rgb(243, 53, 53)", secondary_color = "rgb(216, 233, 240)"
export default function experience() {
    return (
        <div className={"slate-500"}>
            <Nav min={0}/>
            <div className={"flex w-screen bg-building bg-cover bg-fixed bg-bottom items-center justify-center"}>
                <div className={"text-white text-9xl align-middle py-20 h-full w-full bg-black bg-opacity-40"}>
                    <WindowTranslate range={[0, 1]} translate={[2, -2]}><p>Experience</p></WindowTranslate>
                </div>
            </div>
            <GlowContainer>
                <div className={"space-y-2 py-16"}>
                <WindowTranslate translate={translate} range={range}>

                    <div className={"sm:w-2/3 w-full text-left items-center"}>
                    <p className={"text-left text-2xl sm:text-3xl md:text-4xl pt-4"}
                       style={{color: secondary_color}}
                       >Research</p>
                    </div>
                </WindowTranslate>

                {research.map((unit, key) => {
                    return (
                            <WindowTranslate translate={translate} key={key}
                                             range={range}><Card thing={unit} color={main_color}/>
                            </WindowTranslate>
                        )
                    })}
                <WindowTranslate translate={translate} range={range}>

                    <div className={"sm:w-2/3 w-full text-left items-center"}>
                        <p className={"text-left text-2xl sm:text-3xl md:text-4xl pt-4"}
                           style={{color: secondary_color}}>Projects</p>
                    </div>
                </WindowTranslate>
                    {projects.map((unit, key) => {
                        return (
                            <WindowTranslate translate={translate} key={key}
                                             range={range}><Card thing={unit} color={main_color}/>
                            </WindowTranslate>
                        )
                    })}
                <WindowTranslate translate={translate} range={range}>

                    <div className={"sm:w-2/3 w-full text-left items-center"}>
                        <p className={"text-left text-2xl sm:text-3xl md:text-4xl pt-4"}
                           style={{color: secondary_color}}>Other Experience</p>
                    </div>
                </WindowTranslate>
                    {hs.map((unit, key) => {
                        return (
                            <WindowTranslate translate={translate} key={key}
                                             range={range}><Card thing={unit} color={main_color}/>
                            </WindowTranslate>
                        )
                    })}
                <WindowTranslate translate={translate} range={range}>

                    <div className={"sm:w-2/3 w-full text-left items-center"}>
                        <p className={"text-left text-2xl sm:text-3xl md:text-4xl pt-4"}
                           style={{color: secondary_color}}>Education</p>
                    </div>
                </WindowTranslate>
                {education.map((unit, key) => {
                    return (
                        <WindowTranslate translate={translate} key={key}
                                         range={range}><Card thing={unit} color={main_color}/>
                        </WindowTranslate>
                    )
                })}
                </div>
            </GlowContainer>
            <Back/>
        </div>
    )
}
