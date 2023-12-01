import { useNavigate } from "react-router-dom";
import pokegif1 from "@/assets/4tym.gif";
import logo from "@/assets/logo4.svg";


const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-7 lg:gap-5 md:gap-10 font-roboto bg-hp md:bg-laptop bg-cover bg-bottom min-h-screen">
      <img
        src={logo}
        alt="logo"
        className="mb-[200px] min-[390px]:mb-[300px] md:mb-[400px] lg:w-[600px] lg:mb-[50px] min-[1280px]:mb-[200px] "
      />
      <img src={pokegif1} alt="pokemon" className="w-[150px] md:w-[200px]" />
      <button
        onClick={() => navigate("/home")}
        className="flex flex-row gap-1 items-center justify-center text-white px-4 py-2 rounded-xl drop-shadow-md hover:drop-shadow-xl border-slate-50 border-2 bg-pokeblue hover:bg-pokeblue-800/80 font-bold text-lg md:text-xl md:px-7 md:py-3">
        START
      </button>
    </div>
  );
};

export default Index;
