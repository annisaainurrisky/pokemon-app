/* eslint-disable @typescript-eslint/no-explicit-any */
import { Detail } from "@/utils/apis/pokemon";
import Layout from "@/components/layout";
import Card from "@/components/card";



const MyList = () => {
  const getCache = localStorage.getItem("myPokemon");
  let getCacheParse = [];
  if (getCache !== null) {
    getCacheParse = JSON.parse(getCache);
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {getCacheParse.map((detail: Detail) => (
          <Card
            key={detail.newName}
            name={detail.name}
            image={detail.sprites.other.dream_world.front_default}
            newName={detail.newName}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyList;
