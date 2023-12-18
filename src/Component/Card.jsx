const Card = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="h-fit md:max-w-[20em] max-w-[16em] bg-r-darkBlueCard rounded-xl p-5 shadow-cstm flex flex-col gap-4 overflow-hidden">
        <div>
          <div className="relative h-full w-full">
            <img
              src="/image-equilibrium.jpg"
              alt="Equilibrium"
              className="rounded-lg "
            />
            <div className="opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <p className="absolute w-full h-full rounded-lg bg-r-darkerCyan flex items-center justify-center top-0 left-0">
                <img src="/icon-view.svg" alt="Eye-Icon" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-lg text-r-white hover:text-r-cyan transition-all duration-200 cursor-pointer w-fit">
            Equilibrium &#x23;3429
          </h3>
          <p className="font-light text-[15px] text-r-grayishBlue">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
        <div className="flex justify-between border-b-[1px] border-r-slightDarkBlue pb-4 gap-4">
          <span className="flex items-center gap-2">
            <img src="/icon-ethereum.svg" alt="Ethereum" className="h-fit" />
            <h3 className="text-r-cyan text-md font-semibold">0.041 ETH</h3>
          </span>
          <span className="flex items-center gap-2">
            <img src="/icon-clock.svg" alt="Clock-Icon" className="h-fit" />
            <h3 className="text-r-grayishBlue">3 days left</h3>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/image-avatar.png"
            alt="Pfp"
            className="h-8 w-8 border-[1px] border-r-white rounded-full"
          />
          <p className="text-[15px] font-light text-r-grayishBlue">
            Creation of{" "}
            <span className="text-r-white text-[15px] font-light hover:text-r-cyan transition-all duration-200 cursor-pointer w-fit">
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
