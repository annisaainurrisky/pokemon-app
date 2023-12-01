import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import pokeball from "@/assets/pokeball.svg";
import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <div>
      <footer className="w-full fixed bottom-0 bg-white/90 dark:bg-black/90 z-50 border-t-slate-200 dark:border-t-slate-600 border-2 lg:hidden">
        <div className="mx-auto flex container items-center justify-between px-6 py-4 md:p-10">
          <Link to="/home">
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
              <HomeIcon />
              <p>Home</p>
            </div>
          </Link>
          <Link to="/my-pokemon">
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <img src={pokeball} alt="pokeball" className="w-7" />
              <p>My Pokemon</p>
            </div>
          </Link>
          <div className="flex flex-col items-center cursor-pointer">
            <ModeToggle />
            <p>Theme</p>
          </div>
        </div>
      </footer>
      <footer className="w-full min-h-[20vh] bg-white dark:bg-black items-center hidden lg:block">
        <div className="container p-6 h-full">
          <p>Copyright &copy;2023 Pokemon Dash. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
