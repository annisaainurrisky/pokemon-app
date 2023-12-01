/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "@/utils/apis/axiosWithConfig";
import { Detail } from ".";

export const getPokemons = async () => {
  try {
    const response = await axiosWithConfig.get("/pokemon");
    // console.log("get pokemon", response.data.results);
    return response.data.results;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const detailPokemonsService = async (api: string) => {
  try {
    const response = await axiosWithConfig.get(api);
    return response.data.sprites.other.dream_world.front_default as string;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailPokemon = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`/pokemon/${id}`);
    console.log("detailapi:", response.data);
    return response.data as Detail;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
