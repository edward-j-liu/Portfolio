import Favorites from "./components/Favorites";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Shrinker from "./components/Shrinker";

export default function Home() {
    return (
        <div className={"text-blue-950"}>
            <Nav min={500} />
            <div className={"bg-intro h-screen w-screen bg-cover bg-fixed bg-middle items-center justify-center"}>
                <div className={"pt-72 text-white text-9xl"}>
                    <Shrinker big={1} small={0.85} top={0} bottom={500} text={"Hello, my name is Edward Liu"}/>
                </div>
            </div>
            <div className={"w-screen h-fit bg-white md:p-40 sm:p-32 p-10"}>
                <p className={"text-3xl pb-4"}>Welcome to my Portfolio!</p>
                <p className={"text-2xl"}>My name is Edward Liu, Class of 26’ at Los Altos High School. In this
                    portfolio,
                    my object is to complete the hardest task known to man: sharing facts about one&apos;s own personality
                    and
                    achievements, especially those relating to robotics.
                </p>
            </div>
            <div className={"bg-building bg-cover bg-fixed bg-middle"}>
                <div className={"justify-self-center"}>
                    <p className={"text-center align-middle py-40 text-9xl font-bold text-white"}>About me</p>
                </div>
            </div>
            <div className={"flex flex-col bg-white md:px-32 sm:px-24 md:pt-32 sm:pt-24 text-2xl"}>
                <p className={"text-2xl"}>In the interest of time, and because I wanted to make a cool scroller,
                    here
                    is a quick overview of some of my favorite things in no particular order!</p>
                <Favorites/>
                <p>
                    In my limited free time, I enjoy doing many very human activities. Although video games are fun,
                    recently I’ve been trying to play less of them as I feel very burnt out from them. I enjoy
                    photography; all of the pictures on this website were taken by me. I&apos;m always listening to music. I
                    like all genres, but pop songs from the 2010&apos;s and classic rock are my favorites. Other than that,
                    the only
                    sport I do is archery, which I&apos;m average at. At school, I am a part of mock trial, chess (challenge me with the link in the footnote), and
                    robotics, which are all pretty large time commitments, yet I enjoy every second of all of
                    them.
                </p>
                <p className={"my-4"}>Now that personal stuff is out of the way, without further ado, here is
                    what I&apos;ve spent fall semester of 24-25 doing!</p>
            </div>
            <div className={"pb-24"}>
                <p className={"text-center text-5xl py-8"}>PORTFOLIO</p>
                <Projects/>
            </div>
        </div>
    );
}
