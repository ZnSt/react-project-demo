import space from '../../img/space.png';

export const Hero = () => {
  return (
    <section className="py-[160px] ">
      <div className="flex justify-around items-center">
        <div className="font-extrabold">
          <h1 className="font-outfit non-italic  text-[64px] leading-[68px] text-primaryText capitalize">
            discover and enjoy <br />a new{' '}
            <span className="titleHeroColor">Generation</span>
            <br /> of WebDev
          </h1>
          <p className="font-roboto non-italic  text-[24px] leading-[32px] text-primaryText capitalize mt-[64px]">
            a project that will change the <br /> idea Of ​​modern development
          </p>
          <div className="mt-[94px]">
            <button
              type="button"
              className="font-outfit non-italic font-bold text-[24px] leading-[32px] uppercase text-primaryText backgroundBtnTry w-[206px] h-[52px] rounded-[31px] mr-[24px]"
            >
              try on
            </button>
            <button
              type="button"
              className="font-outfit non-italic font-bold text-[24px] leading-[32px] uppercase text-primaryText w-[206px] h-[52px] rounded-[31px] bg-transparent borderStyle"
            >
              read more
            </button>
          </div>
        </div>
        <div>
          <img src={space} alt="saly" className="w-[100%] relative z-[5]" />
          <div   className='absolute z-[0]  w-[17%] h-[7%] top-[260px] right-[500px] rounded-full greenBlob '
          ></div>
          <div   className='absolute z-[0]  w-[17%] h-[7%] top-[480px] right-[560px] rounded-full tealBlob '
          ></div>
        </div>
      </div>
    </section>
  );
};
