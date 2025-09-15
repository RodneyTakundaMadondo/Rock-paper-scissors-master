import GameBanner from "./GameBanner"
import { Outlet } from 'react-router-dom'
import RulesModal from "./RulesModal"
import { useState } from "react"
export default function Layout({score}) {
    
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
           <div className="space-y-8">
             <GameBanner score={score} />
            <Outlet />
           </div>
            <div className="flex justify-center items-center pt-8 lg:pt-0 lg:pr-16">
                <button onClick={() => setOpenModal(true)} className="uppercase tracking-widest lg:text-3xl text-white font-bold border-solid border-2 px-8 py-2 rounded-md lg:ml-auto ">Rules</button>
            </div>
            {
                openModal ?
                    <RulesModal setOpenModal={setOpenModal} />
                    : ""
            }
        </>
    )
}