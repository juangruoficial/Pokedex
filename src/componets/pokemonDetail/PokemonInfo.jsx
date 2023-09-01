import {
  bgPrimaryColorsTypes,
  bgStylePokemonType,
} from "../../shared/pokemons";
import StatBarList from "./StatBarList";

const PokemonInfo = ({ pokemonData }) => {
  return (
    <article className="flex flex-col gap-6 w-full max-w-3xl bg-white rounded-lg shadow-md p-6 mx-auto">
      <header
        className={`relative h-32 md:h-40 mt-5 text-center ${
          bgStylePokemonType[pokemonData?.types[0]]
        } rounded-t-lg p-4`}
      >
        <div className="mx-auto w-40 md:w-48 absolute left-1/2 transform -translate-x-1/2 -top-16">
          <img src={pokemonData?.image} alt="Pokemon" className="w-full" />
        </div>
      </header>
      <section>
        <article className="mb-4">
          <span className="block text-center text-gray-600 border border-gray-300 rounded-md px-4 py-1 mb-2 font-semibold text-2xl md:text-3xl lg:text-4xl">
            #{pokemonData?.id}
          </span>
          <h3 className="text-center text-3xl md:text-4xl font-semibold capitalize mt-2 mb-4 text-gray-800 border-b border-gray-300 pb-2 w-11/12 mx-auto">
            {pokemonData?.name}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
            <div className="mb-2 md:mb-0 flex flex-col gap-2 items-center w-full">
              <p className="text-gray-600 text-lg md:text-xl">Weight</p>
              <p className="text-gray-800 font-semibold">
                {pokemonData?.weight} kg
              </p>
            </div>
            <div className="mb-2 md:mb-0 flex flex-col gap-2 items-center w-full">
              <p className="text-gray-600 text-lg md:text-xl">Height</p>
              <p className="text-gray-800 font-semibold">
                {pokemonData?.height} cm
              </p>
            </div>
          </div>
        </article>

        <article className="grid mb-4 md:grid-cols-2">
          <div className="flex flex-col gap-2 justify-between items-center mb-4 px-4 py-4 bg-gray-100 rounded-md">
            <h4 className="text-gray-600 font-semibold capitalize text-lg md:text-xl">
              Types
            </h4>
            <div className="flex gap-2 items-center justify-center">
              {pokemonData?.types.map((type) => (
                <span
                  key={type}
                  className={`text-sm px-3 py-2 rounded-full font-semibold ${bgPrimaryColorsTypes[type]} text-white`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-between items-center mb-4 px-4 py-4 bg-gray-100 rounded-md">
            <p className="text-gray-600 font-semibold capitalize text-lg md:text-xl">
              Abilities
            </p>
            <div className="flex flex-wrap gap-2">
              {pokemonData?.abilities.map((ability) => (
                <span
                  key={ability}
                  className="capitalize bg-gray-200 px-3 py-1 text-sm rounded-full text-gray-600"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </article>

        <StatBarList stats={pokemonData?.stats} />
      </section>
    </article>
  );
};

export default PokemonInfo;
