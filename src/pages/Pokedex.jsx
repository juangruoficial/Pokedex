import { useState } from "react";
import PokemonList from "../componets/pokedex/PokemonList";
import usePokedex from "../hook/usePokedex";
import { paginationData } from "../utils/pagination";
import Pagination from "../componets/pokedex/Pagination";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonsFilteredByName,
    types,
  } = usePokedex();

  const { itemsCurrentPage, lastPage, pagesInCurrentBlock } = paginationData(
    pokemonsFilteredByName,
    currentPage
  );

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-white py-6 px-4 md:px-8 lg:px-16">
        <p className="text-center text-gray-700">
          <span className="font-semibold">Welcome {name}</span>
        </p>
        <form className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex-grow">
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              type="text"
              placeholder="Search Pokemon..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#FE1936]"
            />
          </div>
          <div className="flex-grow md:w-48">
            <select
              value={pokemonType}
              onChange={handleChange(setPokemonType)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#FE1936]"
            >
              <option value="">All Pokemon</option>
              {types.map((type) => (
                <option
                  value={type.name}
                  className="capitalize"
                  key={type.name}
                >
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </section>

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        className="py-4 px-4 md:px-8 lg:px-16"
      />

      <PokemonList pokemons={itemsCurrentPage} />

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        className="py-4 px-4 md:px-8 lg:px-16"
      />
    </main>
  );
};

export default Pokedex;
