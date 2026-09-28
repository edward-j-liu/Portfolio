import Nav from "@/app/components/Nav";

import {WindowTranslate} from "@/app/components/Translate"
import Back from "@/app/components/Back";

export default function experience() {
    return (
        <div className={"slate-500"}>
            <Nav min={0}/>
            <div className={"flex w-screen bg-clouds bg-cover bg-fixed bg-bottom items-center justify-center"}>
                <div className={"text-white text-9xl align-middle py-20 h-full w-full bg-black bg-opacity-40"}>
                    <WindowTranslate range={[0, 1]} translate={[2, -2]}><p>Resume</p></WindowTranslate>
                </div>
            </div>
            <div className={"h-screen w-screen"}>
            <iframe src="/Edward_Liu_Resume.pdf" width="100%" height="100%" style={{border: 0}}></iframe>
            </div>
            <Back/>
        </div>
    )
}
