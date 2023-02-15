import logo from '../../img/kirin.svg';
import { FiUser } from "react-icons/fi";

export const NavBar = () => {
  return (
   <header>
     <nav className="flex items-center justify-between">
       <a href="#home" className="logo">
         kirin
       </a>
       <ul className="flex items-center justify-center gap-x-[60px] text-primaryText">
         <li><a href="#home" className="header-link">home</a></li>
         <li><a href="#projects" className="header-link">projects</a></li>
         <li><a href="#contacts" className="header-link">contacts</a></li>
         <button className="ml-[30px]">
           <FiUser className="w-[30px] h-[30px]"/>
         </button>
       </ul>
     </nav>
   </header>
  );
};


//  <nav className="flex items-center ">
//       <a href="#home">
 
//     </a>
//       <ul className="hidden md:mx-[471px] md:flex items-center justify-center gap-x-[60px] text-primaryText">
//         <li>
//           <a href="#home" className="header-link ">
//             home
//           </a>
//         </li>
//         <li>
//           <a href="#project" className="header-link ">
//             project
//           </a>
//         </li>
//         <li>
//           <a href="#contact" className="header-link ">
//             contact
//           </a>
//         </li>
//         <button className="ml-[50px]">
     
//       </button>
//       </ul>
//     </nav>
