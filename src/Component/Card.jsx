const Card = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="h-fit md:max-w-[18em] max-w-[16em] bg-[--dark-blue-card] rounded-xl p-5 shadow-cstm flex flex-col gap-4">
                <div>
                    <div className="relative h-full w-full">
                        <img src="/image-equilibrium.jpg"
                            className="rounded-lg "
                        />
                        <div className="opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                            <p className="absolute w-full h-full rounded-lg bg-[--darker-cyan] flex items-center justify-center top-0 left-0">
                                <img src="/icon-view.svg" />
                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-lg text-[--white] hover:text-[--cyan] transition-all duration-200 cursor-pointer w-fit">Equilibrium &#x23;3429</h3>
                    <p className="font-light text-[15px] text-[--grayish-blue]">
                        Our Equilibrium collection promotes balance and calm.
                    </p>
                </div>
                <div className="flex justify-between border-b-[1px] border-[--slight-dark-blue] pb-4 gap-4">
                    <span className="flex items-center gap-2">
                        <img src="/icon-ethereum.svg" className="h-fit" />
                        <h3 className="text-[--cyan] text-md font-semibold">0.041 ETH</h3>
                    </span>
                    <span className="flex items-center gap-2">
                        <img src="/icon-clock.svg" className="h-fit" />
                        <h3 className="text-[--grayish-blue]">3 days left</h3>
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <img src="/image-avatar.png" className="h-8 w-8 border-[1px] border-[--white] rounded-full" />
                    <p className="text-[15px] font-light text-[--grayish-blue]">Creation of <span className="text-[--white] text-[15px] font-light hover:text-[--cyan] transition-all duration-200 cursor-pointer w-fit">Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card;