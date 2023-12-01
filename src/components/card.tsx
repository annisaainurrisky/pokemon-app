/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Detail } from "@/utils/apis/pokemon";
import { XSquareIcon } from "lucide-react";

interface PokemonProps {
  name: string;
  url?: string;
  image?: string;
  newName?: string;
  onClick?: React.MouseEventHandler;
}

// function handleDeletePokemon() {
//   const getCache = localStorage.getItem("myPokemon");
//   let gotItemParse = [];
//   if (getCache !== null) {
//     gotItemParse = JSON.parse(getCache);
//   }
//   const deletePokemon = gotItemParse.filter((item: Detail) => item.newName !== detail.newName);
//   return deletePokemon
// }

const Card = (props: PokemonProps) => {
  const { name, url, onClick, newName, image } = props;

  return (
    <div
      onClick={onClick}
      className="flex flex-col m-3 cursor-pointer rounded-md w-36 md:w-56 lg:w-64 shadow-md border-slate-500 bg-pokeblue/50">
      {newName ? (
        <div className="p-1 flex justify-end cursor-pointer">
          <XSquareIcon />
        </div>
      ) : (
        <></>
      )}
      <img
        src={
          url
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                url.split("/")[6]
              }.svg`
            : image
        }
        alt={name}
        className="h-auto w-auto p-5 aspect-square overflow-hidden"
      />
      <div className="bg-white dark:bg-black/40 w-full flex justify-center py-2 items-center">
        <p>
          {name} <br />
          <span className="flex justify-center items-center text-slate-500">
            {newName}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
