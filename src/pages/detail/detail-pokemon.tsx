/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getDetailPokemon } from "@/utils/apis/pokemon/api";
import { Detail } from "@/utils/apis/pokemon";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import back from "@/assets/back.svg";
import {
  Heart,
  SwordIcon,
  Shield,
  Clock,
  SwordsIcon,
  ShieldPlusIcon,
} from "lucide-react";

const DetailPokemon = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [detail, setDetail] = useState<Detail>();

  const location = useLocation();
  const id = location?.state?.id;

  const navigateTo = (id: number) => {
    navigate(`/catch/${id}`, {
      state: {
        id: id,
      },
    });
  };

  useEffect(() => {
    fetchDataDetail(id);
  }, []);

  async function fetchDataDetail(id: string) {
    try {
      const result = await getDetailPokemon(id);
      setDetail(result);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <div className="lg:grid lg:grid-cols-2 font-roboto">
      <div>
        <Link to="/home">
          <img
            src={back}
            alt="back"
            className="absolute w-5 lg:w-8 mt-[35px] ms-[25px] md:me-[680px] lg:mb-[600px] cursor-pointer"
          />
        </Link>
        <div className="flex items-center justify-center bg-gradient-to-t dark:from-black/50 dark:to-pokeblue from-white to-pokeblue lg:bg-gradient-to-l lg:from-white lg:to-pokeblue lg:min-h-full">
          <div className="w-56 md:w-64 lg:w-80">
            <img
              src={detail?.sprites.other.dream_world.front_default}
              alt={detail?.forms[0].name}
              className="h-auto w-auto aspect-square overflow-hidden my-10"
            />
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-3 lg:my-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          {detail?.name}
        </h1>
        <Badge className="w-14 flex justify-center">
          {detail?.types[0].type.name}
        </Badge>
        <div>
          <h5 className="font-semibold text-lg">About</h5>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <p>Weight</p>
              <div className="border-slate-300 border-2 rounded-md px-5 py-1 flex justify-center w-auto">
                {detail?.weight} hg
              </div>
            </div>
            <div>
              <p>Height</p>
              <div className="border-slate-300 border-2 rounded-md px-5 py-1 flex justify-center w-auto">
                {detail?.height} dm
              </div>
            </div>
            <div>
              <p>Abilities</p>
              <div className="border-slate-300 border-2 rounded-md px-5 py-1 flex justify-center w-auto">
                <ul>
                  {detail?.abilities.map((el: any) => {
                    return <li>{el.ability.name}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div>
              <p>Base Experience</p>
              <div className="border-slate-300 border-2 rounded-md px-5 py-1 flex justify-center w-auto">
                {detail?.base_experience}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-lg">Stats</h5>
          <div className="container rounded-md flex flex-row gap-[100px] md:gap-[450px] lg:gap-[180px] items-center justify-center p-5 border-slate-300 dark:border-white border-2 w-full h-auto">
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-2">
                <Heart />
                HP
              </li>
              <li className="flex flex-row gap-2">
                <SwordIcon />
                Attack
              </li>
              <li className="flex flex-row gap-2">
                <Shield />
                Defense
              </li>
              <li className="flex flex-row gap-2">
                <SwordsIcon />
                Special Attack
              </li>
              <li className="flex flex-row gap-2">
                <ShieldPlusIcon />
                Special Defence
              </li>
              <li className="flex flex-row gap-2">
                <Clock />
                Speed
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              {detail?.stats.map((el: any) => {
                return <li>{el.base_stat}</li>;
              })}
            </ul>
          </div>
        </div>
        <button
          onClick={() => navigateTo(detail!.id)}
          className="flex flex-row gap-1 items-center justify-center text-white px-4 py-2 rounded-xl drop-shadow-md hover:drop-shadow-xl border-slate-50 border-2 bg-pokeblue hover:bg-pokeblue-800/80 font-bold text-lg md:text-xl md:px-7 md:py-3 mb-[50px] mt-[20px] lg:mb-0">
          CATCH
        </button>
      </div>
    </div>
  );
};

export default DetailPokemon;
