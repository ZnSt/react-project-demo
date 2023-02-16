import { FiUser } from 'react-icons/fi';

export const NavBar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <a href="#home" className="logo">
          kirin
        </a>
        <ul className="flex items-center justify-center gap-x-[60px] text-primaryText">
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
          <FiUser className="w-[30px] h-[30px] fill-white stroke-white" />
        </button>
      </nav>
    </header>
  );
};
