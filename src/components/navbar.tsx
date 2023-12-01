import logo from "@/assets/logo4.svg";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 bg-white/90 dark:bg-black/90 z-50">
      <nav className="mx-auto flex container items-center justify-center p-3 lg:flex-row lg:justify-between">
        <div className="flex flex-row justify-between gap-5">
          <img src={logo} alt="logo" className="w-[150px] cursor-pointer" />
          <div className="hidden lg:inline">
            <ul className="flex flex-row justify-between gap-5 mt-5">
              <Link to="/home">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link to="/my-pokemon">
                <li className="cursor-pointer">My Pokemon</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="hidden lg:inline cursor-pointer">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
