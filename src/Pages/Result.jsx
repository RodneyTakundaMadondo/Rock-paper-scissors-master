// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function Result() {
    const params = useParams();
   const base = import.meta.env.BASE_URL;

   


    return (
        <section className="space-y-16">
            <div className="flex justify-center items-center gap-16 border-solid border-2 border-red-500 md:py-8 lg:py-16">

                <div className=" text-center flex flex-col gap-4">
                    <button to="/result" className={`  rounded-full h-24 w-24 sm:h-26 sm:w-26 md:h-36 md:w-36 md:p-6 lg:h-50 lg:w-50 p-3 lg:p-12 ${params.id}-btn  flex justify-center bg-white`}>
                        <img src={`${base}/images/icon-${params.id}.svg`} alt="" />
                    </button>
                    <span className="uppercase text-white font-semibold lg:-order-1">You picked</span>
                </div>

                <div className="hidden lg:block">
                    
                        <div className="space-y-4 text-center">
                            <h1 className="text-white font-bold uppercase text-5xl"> </h1>
                            <Link className="bg-white uppercase px-4 py-2 block max-w-[15rem] font-semibold text-lg rounded-xl mx-auto" to="/">
                                Play again
                            </Link>
                        </div>
                </div>

                <div className="text-center flex flex-col gap-4">
                  
                            <button to="/result" className={`rounded-full h-24 w-24 sm:h-26 sm:w-26 md:h-36 md:w-36 md:p-6 lg:p-12 lg:h-50 lg:w-50 p-3  paper-btn  flex justify-center bg-white`}>
                                <img src={`${base}/images/icon-paper.svg`} alt="" />
                            </button>
                             {/* <button className="block mx-auto rounded-full h-24 w-24 sm:h-26 sm:w-26  lg:h-50 lg:w-50 p-3  bg-(--dark-text)">

                            </button> */}
                    

                    <span className="uppercase text-white font-semibold lg:-order-1">the house picked </span>
                </div>

            </div>
            <div className="lg:hidden">
               
                    <div className="space-y-4 text-center">
                        <h1 className="text-white font-bold uppercase text-5xl"> </h1>
                        <Link className="bg-white uppercase px-4 py-2 block max-w-[15rem] font-semibold text-lg rounded-xl mx-auto" to="/">
                            Play again
                        </Link>
                    </div>
            </div>



        </section>
    )
}