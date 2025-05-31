"use client"
import {motion} from "framer-motion"
import {quoteList} from "@/app/data/quotes"

export default function Quotes() {

    return (
        <div className={"flex flex-col w-screen bg-clouds bg-cover bg-fixed bg-bottom items-center justify-center text-white pt-44 pb-96 px-28"}>{
            quoteList.map((quote, index)=>{
                if (index%2===0) return (
                    <motion.div className={"my-32"}
                                initial={{x: 30}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.4, delay: 0, once: true}}
                                key={index}
                    >
                    <p className={"text-7xl"}>“{quote.quote}”</p>
                    <p className={"text-2xl pt-2"}>- {quote.person}</p>
                </motion.div>)
                else return (
                    <motion.div className={"my-32"}
                        initial={{x:-30}}
                                whileInView={{x:0}}
                                transition={{duration: 0.4, delay: 0, once: true}}
                    key={index}>
                        <p className={"text-6xl"}>“{quote.quote}”</p>
                        <p className={"text-2xl pt-2"}>- {quote.person}</p>
                    </motion.div>)
            })}</div>

    // <div className={"flex flex-col w-screen bg-clouds bg-cover bg-fixed bg-bottom items-center justify-center text-white pt-44 pb-96 px-28"}>
    //         <motion.div className={"my-32"}
    //             initial={{x: 30}}
    //             whileInView={{x: 0}}
    //             transition={{duration: 0.4, delay: 0, once: true}}
    //         >
    //             <p className={"text-7xl"}>“Eddie always pushes us to be our best”</p>
    //             <p className={"text-2xl pt-2"}>- CJ, Class of ‘25</p>
    //         </motion.div>
    //         <motion.div className={"my-32"}
    //             initial={{x:-30}}
    //                     whileInView={{x:0}}
    //                     transition={{duration: 0.4, delay: 0, once: true}}
    //         >
    //             <p className={"text-6xl"}>“Working with great people makes you great, you learn a lot and also gives you the
    //                 experience and
    //                 confidence to move on with your career”</p>
    //             <p className={"text-2xl pt-2"}>- Erim, Class of ‘26</p>
    //         </motion.div>
    //         <motion.div className={"my-32"}
    //             initial={{x:30}}
    //                     whileInView={{x:0}}
    //                     transition={{duration: 0.4, delay: 0, once: true}}
    //         >
    //             <p className={"text-7xl"}>
    //                 “He taught us how to hobbies stuff very well”
    //             </p>
    //             <p className={"text-2xl pt-2"}>- Wade, Class of ‘27</p>
    //         </motion.div>
    //         <motion.div className={"my-32"}
    //             initial={{x:-30}}
    //                     whileInView={{x:0}}
    //                     transition={{duration: 0.4, delay: 0, once: true}}
    //         >
    //             <p className={"text-6xl"}>
    //                 “Eddie was an amazing mentor who taught me how to hobbies… and now I know how to hobbies. I am the coder
    //                 that I am today because of Eddie”
    //             </p>
    //             <p className={"text-2xl pt-2"}>- Dana, Class of ‘27</p>
    //         </motion.div>
    //     </div>
    )
}
