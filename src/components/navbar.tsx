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
            <Link to="/home">
              <ul className="flex flex-row justify-between gap-5 mt-5">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">My Pokemon</li>
              </ul>
            </Link>
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
