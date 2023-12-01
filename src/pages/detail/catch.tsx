/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDetailPokemon } from "@/utils/apis/pokemon/api";
import { Detail } from "@/utils/apis/pokemon";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import pokeball from "@/assets/pokeball2.svg";


const Catch = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newName, setNewName] = useState("");

  const location = useLocation();
  const id = location?.state?.id;

  const [detail, setDetail] = useState<Detail>();
  const [monster, setMonster] = useState("");

  const isInLocalStorage = () => {
    const getLocalStorage = localStorage.getItem("myPokemon");
    let gotItemParse = [];
    if (getLocalStorage !== null) {
      gotItemParse = JSON.parse(getLocalStorage);
    }

    const findIfExist = gotItemParse.find((x: Detail) => x.newName == newName);

    if (findIfExist) {
      return alert("Ooops! this name has already exist");
    } else {
      const dupe = Object.assign({}, detail);
      dupe["newName"] = newName;
      gotItemParse.push(dupe);
      localStorage.setItem("myPokemon", JSON.stringify(gotItemParse));
      navigate("/my-pokemon");
    }
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

  function gachaPokemon() {
    return new Promise((resolve, reject) => {
      const rate = Math.floor(Math.random() * 100);
      console.log("rate", rate);
      setTimeout(() => {
        if (rate > 50) {
          resolve("Congratulation, you catch a pokemon");
        } else {
          reject(`The ${detail?.name} dashed away, you missed!`);
        }
      }, 1000);
    });
  }

  async function playGacha() {
    try {
      await gachaPokemon();
      setMonster("ada");
    } catch (error: any) {
      setMonster("tidak ada");
      alert(error);
    }
  }

  return (
    <div className="bg-catch bg-cover min-h-screen bg-center font-roboto flex flex-col justify-between lg:items-center py-12 px-5">
      <div className=" bg-white/80 border-red-600 border-2 text-red-600 p-6 rounded-xl lg:w-[600px]">
        <p className="md:text-xl"> Oh! A wild {detail?.name} appeared! </p>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-2">
          {monster == "ada" ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <img
                  src={pokeball}
                  alt="pokeball"
                  className="w-40 md:w-60 lg:w-52 cursor-pointer absolute animate-bounce"
                />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex flex-col justify-center items-center">
                    Congratulation! you caught {detail?.name}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="flex flex-col justify-center items-center gap-2">
                    <h1>Nickname</h1>
                    <Input
                      type="text"
                      onChange={(event) => setNewName(event.target.value)}
                    />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction
                    onClick={() => {
                      isInLocalStorage();
                    }}>
                    Submit
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <></>
          )}
          <img
            src={detail?.sprites.other.dream_world.front_default}
            alt={detail?.name}
            className="w-36 md:w-56 lg:w-48"
          />
          <p className="text-xl font-semibold md:text-3xl lg:text-2xl">
            What will you do?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => navigate("/home")}
            className="flex flex-row gap-1 items-center justify-center text-white px-4 py-2 rounded-xl drop-shadow-md hover:drop-shadow-xl border-slate-50 border-2 bg-pokeblue hover:bg-pokeblue-800/80 font-bold text-lg md:text-xl md:px-7 md:py-3">
            RUN
          </button>
          <button
            className="flex flex-row gap-1 items-center justify-center text-white px-4 py-2 rounded-xl drop-shadow-md hover:drop-shadow-xl border-slate-50 border-2 bg-red-600 hover:bg-pokeblue-800/80 font-bold text-lg md:text-xl md:px-7 md:py-3"
            onClick={() => playGacha()}>
            CATCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catch;
