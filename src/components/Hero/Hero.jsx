import saly from '../../img/saly.png';

export const Hero = () => {
  return (
    <section>
      <div className="flex justify-around items-center">
        <div className="font-extrabold">
          <h1 className="font-outfit non-italic  text-[64px] leading-[68px] text-primaryText capitalize">
            discover and enjoy a new{' '}
            <span className="titleHeroColor">generation</span> <br />
            of WebDev
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
          <img src={saly} alt="saly" className="max-w-[120%]" />
        </div>
      </div>
    </section>
  );
};
