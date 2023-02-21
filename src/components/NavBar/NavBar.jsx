import { FiUser } from 'react-icons/fi';

export const NavBar = () => {
  return (
    <header>
      <div className=' z-[0] rounded-full  pinkBlob' />
      <nav className="flex items-center justify-between">
        <a href="#home" className="logo">
        kirin
        </a>
        <ul className="flex items-center justify-center gap-x-[63px] text-primaryText">
          <li>
            <a href="#home" className="header-link">
              home
            </a>
          </li>
          <li>
            <a href="#projects" className="header-link">
              projects
            </a>
          </li>
          <li>
            <a href="#contacts" className="header-link">
              contacts
            </a>
          </li>
        </ul>
        <button className="">
          <FiUser className="w-[45px] h-[35px]   stroke-stone-400" />
        </button>
      </nav>
    </header>
  );
};
