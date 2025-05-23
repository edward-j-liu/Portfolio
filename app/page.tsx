import Favorites from "./components/Favorites";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Shrinker from "./components/Shrinker";

export default function Home() {
    return (
        <div className={"text-blue-950 h-screen bg-white snap-y snap-mandatory overflow-y-scroll"}>
            <Nav min={500} />
            <div className={"text-white justify-center px-10 md:text-9xl text-6xl font-bold bg-intro h-screen w-screen bg-cover bg-fixed bg-middle flex flex-col snap-start snap-always"}>
                    {/*<Shrinker big={1} small={0.1} top={0} bottom={100} text={"Hello, my name is"}/>*/}
                    {/* <Shrinker big={1} small={0.1} top={0} bottom={100} text={"Edward Liu"}/>*/}
                <p className={"pl-6 pb-2"}>Hello, my name is</p>
                <p className={"pl-6"}>Edward Liu</p>
            </div>
            <div className={"w-screen h-screen bg-white md:py-40 sm:py-32 py-10 md:px-40 sm:px-24 px-10 snap-start snap-always flex flex-col justify-center"}>
                <p className={"sm:text-4xl text-2xl pb-4"}>Welcome to my Portfolio!</p>
                <p className={"sm:text-2xl"}>My name is Edward Liu, Class of 26’ at Los Altos High School. This portfolio is meant to be a neat little showcase of the things I have done and who I am as a person.
                </p>
                <div className={"pt-16"}>
                    <Projects/>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
