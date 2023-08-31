import { useState } from "react";
import PokemonList from "../componets/pokedex/PokemonList";
import usePokedex from "../hook/usePokedex";
import { paginationData } from "../utils/pagination";
import Pagination from "../componets/pokedex/Pagination";

import FormFilterPokemons from "../componets/pokedex/FormFilterPokemons";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
    currentPage,
    itemsPerPage
  );

  return (
    <main className="min-h-screen bg-gray-100">
      <FormFilterPokemons
        name={name}
        setItemsPerPage={setItemsPerPage}
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        pokemonType={pokemonType}
        setPokemonType={setPokemonType}
        handleChange={handleChange}
        types={types}
        itemsPerPage={itemsPerPage}
      />

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
