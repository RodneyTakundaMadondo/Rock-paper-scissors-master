import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Home({onReturn }) {
    const base = import.meta.env.BASE_URL;
    useEffect(()=>{
        onReturn();
    },[])
    
    return (
        <section className="py-16">
            <div style={{ backgroundImage: `url('${base}images/bg-triangle.svg')` }} className="relative w-[min(calc(100%-2rem),20rem)] lg:w-[min(calc(100%-2rem),30rem)] mx-auto min-h-60 min-w-[16.1rem]  lg:min-h-72 bg-contain bg-no-repeat bg-center">

                <Link to="/result/paper" className="absolute game-btn top-0 left-0 -translate-y-1/2 rounded-full h-22 w-22 sm:h-26 sm:w-26 lg:h-36 lg:w-36 p-3 md:p-5 paper-btn  flex justify-center bg-white">
                    <img src={`${base}images/icon-paper.svg`} alt="" />
                </Link>

                <Link to="/result/rock" className="absolute game-btn bottom-0 left-1/2 -translate-x-1/2  rounded-full h-22 w-22 sm:h-26 sm:w-26 lg:h-36 lg:w-36 p-3 md:p-5 rock-btn border-2 border-solid flex justify-center bg-white">
                    <img src={`${base}images/icon-rock.svg`} alt="rock" />
                </Link>

                <Link to="/result/scissors" className="absolute game-btn top-0 right-0 -translate-y-1/2 rounded-full h-22 w-22 sm:h-26 sm:w-26 lg:h-36 lg:w-36 p-3 md:p-5 scissors-btn border-2 border-solid flex justify-center bg-white">
                    <img src={`${base}images/icon-scissors.svg`} alt="" />
                </Link>
            </div>
        </section>
    )
}