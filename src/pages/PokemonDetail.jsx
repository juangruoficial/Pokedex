import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons.services";
import StatBarList from "../componets/pokemonDetail/StatBarList";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <main className="flex justify-center items-center ">
      <article className="w-[min(100%,_400px)]">
        <header>
          <div>
            <img src={pokemonData?.image} alt="Pokemon" />
          </div>
        </header>
        <section>
          <span>{pokemonData?.id}</span>
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;