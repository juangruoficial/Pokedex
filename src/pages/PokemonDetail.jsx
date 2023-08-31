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
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <article className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
        <header className="text-center">
          <div className="mx-auto w-36">
            <img src={pokemonData?.image} alt="Pokemon" className="w-full" />
          </div>
        </header>
        <section className="mt-4">
          <span className="block text-center text-gray-600">
            #{pokemonData?.id}
          </span>
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
