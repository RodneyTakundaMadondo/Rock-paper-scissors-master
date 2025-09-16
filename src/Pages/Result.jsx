// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function Result({ randomItem, setScore }) {
    const params = useParams();
    const base = import.meta.env.BASE_URL;
    const [showHouseChoice, setShowHouseChoice] = useState(false);
    const [winner, SetWinner] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHouseChoice(true);
            setTimeout(() => {
                SetWinner(returnWinner())
            }, 2000)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const player1 = params.playerChoice;
    const player2 = randomItem;

    function returnWinner() {
        if (player1 === "rock" && player2 === "scissors" ||
            player1 === "paper" && player2 === "rock" ||
            player1 === "scissors" && player2 === "paper" ||
            player1 === "spock" && player2 === "scissors" ||
            player1 === "spock" && player2 === "rock" ||
            player1 === "lizard" && player2 === "paper" ||
            player1 === "lizard" && player2 === "spock" ||
            player1 === "scissors" && player2 === "lizard" ||
            player1 === "paper" && player2 === "spock"
        ) {
            setScore(prev => prev + 1)
            return "You win";
        }
        else if (player1 === player2) {
            return "Tie"
        }
        else if (player2 === null) {
            return "press play again";
        }
        else {
            setScore(prev => prev <= 0 ? prev = 0 : prev - 1)
            return "You lose";
        }
    }



    return (
        <section className="space-y-16">
            <div className="flex justify-center items-center gap-16 md:py-8 lg:py-16 lg:w-[min(100%,65rem)] lg:mx-auto  lg:relative lg:min-h-82">

                <div className={`text-center flex flex-col gap-4 lg:gap-8 lg:items-center lg:absolute lg:left-1/4 ${winner ? "player-choice-container" : ""}`}>
                    <button to="/result" className={`  rounded-full h-24 w-24 sm:h-26 sm:w-26 md:h-36 md:w-36 md:p-6 lg:h-60 lg:w-60 p-3 lg:p-12 ${params.playerChoice}-btn  flex justify-center bg-white lg:!border-[1.5rem]`}>
                        <img src={`${base}/images/icon-${params.playerChoice}.svg`} alt="" />
                    </button>
                    <span className="uppercase text-white font-semibold lg:-order-1 lg:text-2xl">You picked</span>
                </div>

                {
                    winner ?
                        <div className="hidden lg:block ">

                            <div className="flex flex-col gap-8 text-center lg:min-h-[108px] lg:min-w-[368px] ">
                                <h1 className="text-white font-bold uppercase text-5xl"> {winner} </h1>
                                <Link className="bg-white mt-auto uppercase px-4 py-2 block max-w-[15rem] font-semibold text-lg rounded-xl mx-auto hover:text-[#dc2f4f] transition-colors duration-300 ease-in-out" to="/">
                                    Play again
                                </Link>
                            </div>
                        </div> : ""
                }

                <div className={`text-center flex flex-col lg:items-center gap-4 lg:gap-8 lg:absolute lg:right-1/4 ${winner ? "house-choice-container" : ""}`}>

                    {
                        showHouseChoice && randomItem ?
                            <button to="/result" className={`rounded-full h-24 w-24 sm:h-26 sm:w-26 md:h-36 md:w-36 md:p-6 lg:p-12 lg:h-60 lg:w-60 p-3  ${randomItem}-btn  flex justify-center bg-white lg:!border-[1.5rem]`}>
                                <img src={`${base}/images/icon-${randomItem}.svg`} alt="" />
                            </button> :
                            <div className="lg:h-60 lg:w-60 lg:flex lg:items-center lg:justify-center">
                                <button className="block mx-auto rounded-full h-24 w-24 sm:h-26 sm:w-26  lg:h-60 lg:w-60 p-3  bg-(--dark-text) placeholder-btn">

                                </button>
                            </div>
                    }



                    <span className="uppercase text-white font-semibold lg:-order-1 lg:text-2xl lg:mt-auto">the house picked </span>
                </div>

            </div>
            {
                winner ?
                    <div className="lg:hidden">

                        <div className="space-y-4 text-center">
                            <h1 className="text-white font-bold uppercase text-5xl"> {winner ? winner : ""} </h1>
                            <Link className="bg-white uppercase px-4 py-2 block max-w-[15rem] font-semibold text-lg rounded-xl mx-auto" to="/">
                                Play again
                            </Link>
                        </div>
                    </div> :
                    ""
            }



        </section>
    )
}