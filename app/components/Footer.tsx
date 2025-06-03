// import { Space_Grotesk } from 'next/font/google'
// const space = Space_Grotesk({
//     weight: '400',
//     subsets: ['latin'],
// })

import {socials} from "@/app/data/socials"
export default function Footer(){

    return(
        <div className={"flex flex-col gap-2 md:pt-6 sm:pt-4 pt-3 justify-items-center items-center"}>
            <p className={"text-center sm:text-3xl"}>Contact Me:</p>
            <div className={"pt-4 flex flex-row gap-10"}>
                {socials.map((social, index)=> (
                    <div key={index}>
                    <a className={''} href={social.link}>
                        <svg
                            width="60"
                            height="60"
                            fill="slate-900"
                            className="hover:fill-sky-500 hover:scale-110"
                            viewBox={social.viewbox}
                        >
                            <path
                                d={social.path}/>
                        </svg>
                    </a>
                </div>))}


            </div>
        </div>
    );

}
