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
  console.log(pagesInCurrentBlock);

  return (
    <main>
      <section>
        <p>
          <span>Welcome {name}</span>
        </p>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              type="text"
              placeholder="Search pokemon..."
            />
          </div>

          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option value={type.name} className="capitalize" key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <PokemonList pokemons={itemsCurrentPage} />
    </main>
  );
};
export default Pokedex;
