import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons.services";
import PokemonInfo from "../componets/pokemonDetail/PokemonInfo";
import Movements from "../componets/pokemonDetail/Movements";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <section className="flex justify-between">
        <Link
          to="/pokedex/"
          className="w-20 flex self-start justify-center items-center gap-2 text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer hover:underline
      "
        >
          <i className="bx bx-left-arrow-alt bx-fade-right text-4xl"></i>
        </Link>
        <Link to="/pokedex/favorite">
          Favorites
          <i className="bx bxs-heart text-4xl text-red-500"></i>
        </Link>
      </section>

      <PokemonInfo pokemonData={pokemonData} />

      <Movements pokemonData={pokemonData} />
    </main>
  );
};

export default PokemonDetail;
