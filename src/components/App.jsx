import '../index.css';
import { NavBar } from './NavBar';
import { Hero } from './Hero';

export const App = () => {
  return (
    <div className="bodyBgColor relative w-full overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="w-full xl:max-w-[1280px]">
          <NavBar />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </div>
    </div>
  );
};
