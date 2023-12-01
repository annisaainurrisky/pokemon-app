/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemons } from "@/utils/apis/pokemon/api";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";
import Card from "@/components/card";

const List = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);

  const navigateTo = (id: string) => {
    navigate(`/detail/${id}`, {
      state: {
        id: id,
      },
    });
  };

  async function fetchData() {
    try {
      const result = await getPokemons();
      setPokemons(result);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="text-center flex flex-col gap-3 mb-5">
        <div>
          <p className="lg:text-3xl text-lg font-semibold">
            Find your favorite pokemon!
          </p>
        </div>
        <div>
          <form action="">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              autoComplete="off"
              aria-label="Search Book"
              className="pr-20 md:pr-40 lg:pr-60 pl-3 py-1 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-200 focus:ring-2"
            />
          </form>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {pokemons.map((pokemon) => {
          return (
            <Card
              name={pokemon.name}
              url={pokemon.url}
              onClick={() => navigateTo(pokemon.url.split("/")[6])}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default List;
