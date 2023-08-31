import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, formAnimation }) => {
  return (
    <section className="grid mx-auto p-4 w-full max-w-6xl gap-4 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;
