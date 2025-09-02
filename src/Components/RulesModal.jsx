export default function RulesModal({ setOpenModal }) {
    return (

        <section className="fixed top-0 h-full w-full bg-white pt-16">
            <div className="space-y-22 flex flex-col items-center">

                <h1 className="uppercase text-(--dark-text)  font-bold text-xl">rules</h1>

                <div className="flex flex-col items-center  gap-16 ">
                    <div className="">
                        <img className="block max-w-full max-h-full" src="/images/image-rules.svg" alt="rules of the game" />
                    </div>
                    <button
                        className="w-max mx-auto"
                        onClick={() => setOpenModal(false)}>
                        <img src="/images/icon-close.svg" alt="close" />
                    </button>
                </div>

            </div>
        </section>

    )
}