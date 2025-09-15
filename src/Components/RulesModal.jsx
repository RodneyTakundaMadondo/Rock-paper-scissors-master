export default function RulesModal({ advancedMode,setOpenModal }) {
    const base = import.meta.env.BASE_URL;
    console.log(advancedMode)
    return (

        <section className="fixed top-0 h-full w-full lg:max-w-[30rem] lg:h-auto lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:rounded-lg bg-white pt-16">
            <div className="space-y-22 flex flex-col items-center">

                <div className="lg:flex lg:justify-between  lg:w-[min(calc(100%-2rem),25rem)]">
                    <h1 className="uppercase text-(--dark-text)  font-bold lg:font-black text-xl lg:text-3xl">rules</h1>
                    <button
                        className="w-max  hidden lg:block hover:cursor-pointer"
                        onClick={() => setOpenModal(false)}>
                        <img src={`${base}images/icon-close.svg`} alt="close" />
                    </button>
                </div>

                <div className="flex flex-col items-center  gap-16 lg:pb-8">
                    <div className="">
                        <img className="block max-w-full max-h-full" src={`${base}/images/${advancedMode? "image-rules-bonus":"image-rules"}.svg`} alt="rules of the game" />
                    </div>
                    <button
                        className="w-max mx-auto lg:hidden"
                        onClick={() => setOpenModal(false)}>
                        <img src={`${base}images/icon-close.svg`} alt="close" />
                    </button>
                </div>

            </div>
        </section>

    )
}