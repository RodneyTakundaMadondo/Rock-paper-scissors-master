import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Home({ onReturn, advancedMode }) {
    const base = import.meta.env.BASE_URL;
    useEffect(() => {
        onReturn();
    }, [])

    const backgroundEz = {
        backgroundImage: `url('${base}images/bg-triangle.svg')`
    }
    const backgroundSweat = {
        backgroundImage: `url('${base}images/bg-pentagon.svg')`
    }
    return (
        <section className="py-16">
            <div style={advancedMode ? backgroundSweat : backgroundEz} className={`relative w-[min(calc(100%-2rem),20rem)] lg:w-[min(calc(100%-2rem),30rem)] mx-auto min-h-60 min-w-[16.1rem]  ${advancedMode? "lg:min-h-84":"lg:min-h-72"}  bg-contain bg-no-repeat bg-center `}>

                <Link to="/result/paper" className={`absolute game-btn top-0 ${advancedMode? "right-0 translate-y-1/2":"left-0 -translate-y-1/2"} rounded-full h-22 w-22 sm:h-26 sm:w-26 lg:h-36 lg:w-36 p-3 md:p-5 paper-btn  flex justify-center bg-white`}>
                    <img src={`${base}images/icon-paper.svg`} alt="" />
                </Link>

                <Link to="/result/rock" className={`absolute game-btn bottom-0 ${advancedMode? "right-6 translate-y-1/2":"left-1/2 -translate-x-1/2"}  rounded-full h-22 w-22 sm:h-26 sm:w-26 lg:h-36 lg:w-36 p-3 md:p-5 rock-btn border-2 border-solid flex justify-center bg-white`}>
                    <img src={`${base}images/icon-rock.svg`} alt="rock" />
                </Link>

                <Link to="/result/scissors" className={`absolute game-btn top-0 -translate-y-1/2 ${advancedMode? "left-1/2 -translate-x-1/2 ":" right-0 "} rounded-full h-22 w-22 sm:h-26 sm:w-26 lg:h-36 lg:w-36 p-3 md:p-5 scissors-btn border-2 border-solid flex justify-center bg-white `}>
                    <img src={`${base}images/icon-scissors.svg`} alt="" />
                </Link>
                {
                    advancedMode ?
                        <>
                            <Link to="/result/spock" className="absolute game-btn top-0 left-0 translate-y-1/2 rounded-full h-22 w-22 sm:h-26 sm:w-26 lg:h-36 lg:w-36 p-3 md:p-5 spock-btn border-2 border-solid flex justify-center bg-white">
                                <img src={`${base}images/icon-spock.svg`} alt="" />
                            </Link>
                            <Link to="/result/lizard" className="absolute game-btn bottom-0 left-6 translate-y-1/2 rounded-full h-22 w-22 sm:h-26 sm:w-26 lg:h-36 lg:w-36 p-3 md:p-5 lizard-btn border-2 border-solid flex justify-center bg-white">
                                <img src={`${base}images/icon-lizard.svg`} alt="" />
                            </Link>
                        </> : ""
                }
            </div>
        </section>
    )
}