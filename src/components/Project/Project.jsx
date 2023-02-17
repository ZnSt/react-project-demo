import dev from '../../img/web-development.png';
import space from '../../img/space-discovery.png';
export const Project = () => {
  return (
    <section id="#projects" className="pt-[120px]">
      <div>
        <p className="font-outfit non-italic font-light text-[24px] leading-[57px] text-primaryText mb-[15px] uppercase ml-[77px]">
          Project
        </p>
        <div className="list-bg flex justify-center items-center list-bg relative">
          <ul className="flex gap-[225px] text-center">
            <li>
              <a
                href="#todo"
                className="font-outfit non-italic font-bold text-[32px] leading-[57px] text-primaryText"
              >
                To Do List
              </a>
            </li>
            <li>
              <a
                href="#movies"
                className="font-outfit non-italic font-bold text-[32px] leading-[57px] text-primaryText"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="#games"
                className="font-outfit non-italic font-bold text-[32px] leading-[57px] text-primaryText"
              >
                Games
              </a>
            </li>
            <li>
              <a
                href="#photos"
                className="font-outfit non-italic font-bold text-[32px] leading-[57px] text-primaryText"
              >
                Photos
              </a>
            </li>
          </ul>
          <div className="strokeF"></div>
          <div className="strokeS"></div>
          <div className="strokeT"></div>
        </div>
      </div>

      <div className="pt-[144px] flex">
        <div>
          <img src={dev} alt="webDev" />
          <h2 className="font-roboto non-italic font-extrabold text-[48px] leading-[49px] capitalize text-primaryText pt-[70px] ml-[180px]">
            great functionality that <br />
            the <span className="toDoColorText">Todolist</span> gives
          </h2>
        </div>

        <div className="ml-[236px] text-right">
          <h2 className="font-outfit non-italic font-extrabold text-[48px] leading-[68px]  capitalize text-primaryText ">
            scale your
            <br /> work tasks <br />
            and routine
          </h2>
          <p className="font-roboto non-italic font-extrabold text-[24px] leading-[32px]  text-primaryText capitalize mt-[151px] w-[303px]">
            creating notes in the todo list you can organize any
            <br /> number of tasks as much
            <br /> as possible
          </p>
        </div>
      </div>

      <div className="relative">
        <div className=" w-full h-[737px] containerColor absolute top-[200px] right-0">
          <h2 className="font-outfit non-italic font-extrabold text-[48px] leading-[60px] capitalize text-primaryText absolute top-[25px] right-[35px]">
            find time for <span className="yourSelfColor">yourself</span>
          </h2>
          <img
            src={space}
            alt="space-discovery"
            className=" absolute bottom-[-78px] left-[123px]"
          />
          <p className="font-outfit non-italic font-extrabold text-[36px] leading-[40px] capitalize text-primaryText w-[491px] absolute bottom-[-86px] left-[100px]">
            relax and forget about the problems with our entertainment service
          </p>

          <ul className="text-center">
            <li className="absolute top-[6px] left-[9px] ">
              <span className="font-outfit non-italic font-extralight text-[16px] leading-[6px] capitalize text-primaryText">
                watch
              </span>
              <p className="font-outfit non-italic font-bold text-[48px] leading-[6px] capitalize text-violet mt-[17px] ">
                Movies
              </p>
            </li>
            <li className="absolute top-[103px] left-[110px]">
              <span className="font-outfit non-italic font-extralight text-[16px] leading-[6px] capitalize text-primaryText">
                play
              </span>
              <p className="font-outfit non-italic font-bold text-[48px] leading-[6px] capitalize text-blue mt-[17px] ">
                Games
              </p>
            </li>
            <li className="absolute top-[205px] left-[-45px]">
              <span className="font-outfit non-italic font-extralight text-[16px] leading-[6px] capitalize text-primaryText">
                enjoy{' '}
              </span>
              <p className="font-outfit non-italic font-bold text-[48px] leading-[6px] capitalize text-koral mt-[17px] ">
                The photos
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
