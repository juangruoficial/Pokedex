import { useEffect, useState } from "react";
import {
  getPokemonByUrl,
  joinPokemonTypes,
} from "../../services/pokemons.services";
import StatList from "./StatList";
import {
  bgStylePokemonType,
  borderStylePokemonType,
} from "../../shared/pokemons";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Link
      to={`/pokedex/${pokemonInfo?.id}`}
      className={`text-center capitalize border-[5px] rounded-md ${
        borderStylePokemonType[pokemonInfo?.types[0]]
      } hover:shadow-lg transform hover:-translate-y-1 transition-all`}
    >
      <header
        className={`h-[80px] relative mb-8 ${
          bgStylePokemonType[pokemonInfo?.types[0]]
        } `}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[80px] w-[80px]">
          <img
            className="h-full w-full object-contain"
            src={pokemonInfo?.image}
            alt="Pokemon"
          />
        </div>
      </header>
      <section className="p-4">
        <h3 className="text-lg font-semibold mb-1">{pokemonInfo?.name}</h3>
        <h4 className="text-gray-600 mb-2">
          {joinPokemonTypes(pokemonInfo?.types)}
        </h4>
        <h5 className="text-sm font-medium text-gray-800 mb-2">Types</h5>
        <hr className="border-gray-300 mb-2" />
        <StatList stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};

export default PokemonCard;
