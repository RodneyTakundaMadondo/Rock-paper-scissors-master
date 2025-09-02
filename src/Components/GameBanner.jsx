export default function GameBanner(props) {
  
    return (

     <div className="py-4">
           <div className="flex justify-between p-3 rounded-md  border-solid border-2 border-(--header-outline) w-[min(calc(100%-2rem),40rem)] mx-auto">
            <div className="uppercase text-white font-semibold lg:text-3xl">
                <span className="block">rock</span>
                <span className="block">paper</span>
                <span className="block">scissors</span>
            </div>
            <div className="flex flex-col items-center rounded-sm text-(--dark-text) font-bold bg-white px-6 py-2 justify-center lg:px-8">
                <span className="uppercase text-[0.7rem] lg:text-xl">score</span>
                <span className="text-3xl lg:text-5xl">{props.score}</span>
            </div>

        </div>
     </div>  

    )
}