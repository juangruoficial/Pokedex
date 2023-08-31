import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <section className="grid p-4 gap-4 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;
