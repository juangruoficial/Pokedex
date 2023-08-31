import { bgStylePokemonType } from "../../shared/pokemons";
import StatBarList from "./StatBarList";

const PokemonInfo = ({ pokemonData }) => {
  return (
    <article className="flex flex-col gap-6 w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
      <header
        className={`relative h-24 md:h-32 lg:h-40 mt-5 mb-12 text-center ${
          bgStylePokemonType[pokemonData?.types[0]]
        } rounded-t-lg p-4`}
      >
        <div className="mx-auto w-32 md:w-40 lg:w-48 absolute left-1/2 transform -translate-x-1/2">
          <img src={pokemonData?.image} alt="Pokemon" className="w-full" />
        </div>
      </header>
      <section>
        <article className="mb-4">
          <span className="block text-center text-gray-600 border border-gray-300 rounded-md px-4 py-1 mb-2 m font-semibold text-xl md:text-2xl lg:text-3xl">
            #{pokemonData?.id}
          </span>
          <h3 className="text-center text-2xl md:text-3xl font-semibold capitalize mt-2 mb-4 text-gray-800 border-b border-gray-300 pb-2 w-11/12 mx-auto md:w-full 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
            {pokemonData?.name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="mb-2 md:mb-0 md:mr-4 flex flex-col gap-2 items-center w-full">
              <p className="text-gray-600 md:text-lg lg:text-xl">Weight</p>
              <p className="text-gray-800 font-semibold">
                {pokemonData?.weight} kg
              </p>
            </div>
            <div className="mb-2 md:mb-0 md:mr-4 flex flex-col gap-2 items-center w-full">
              <p className="text-gray-600 md:text-lg lg:text-xl">Height</p>
              <p className="text-gray-800 font-semibold">
                {pokemonData?.height} cm
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col mb-4 sm:flex-row gap-4 justify-between items-center w-full px-4 py-4 bg-gray-100 rounded-md sm:px-8 sm:py-8 lg:px-12 lg:py-12 xl:px-16 xl:py-16">
          <div className="flex flex-col gap-5 justify-between items-center mb-2 px-4 py-4 bg-gray-100 rounded-md">
            <h4 className="text-gray-600 font-semibold capitalize text-md md:text-lg lg:text-xl xl:text-2xl">
              Types
            </h4>
            <div className="flex gap-2 items-center">
              {pokemonData?.types.map((type) => (
                <span
                  key={type}
                  className="text-gray-600 capitalize bg-gray-200 rounded-full px-3 py-1 text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-between items-center mb-2 px-4 py-4 bg-gray-100 rounded-md">
            <p className="text-gray-600 font-semibold capitalize text-md md:text-lg lg:text-xl xl:text-2xl">
              Abilities
            </p>
            <p className="text-gray-800 font-semibold">
              {pokemonData?.abilities.map((ability) => (
                <span
                  key={ability}
                  className="capitalize bg-gray-200 px-3 py-1 text-sm rounded-full mr-2 mb-2 inline-block text-gray-600 "
                >
                  {ability}
                </span>
              ))}
            </p>
          </div>
        </article>

        <StatBarList stats={pokemonData?.stats} />
      </section>
    </article>
  );
};
export default PokemonInfo;