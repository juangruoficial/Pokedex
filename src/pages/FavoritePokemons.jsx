import PokemonCard from "../componets/pokedex/PokemonCard";

const FavoritePokemons = () => {
  const favoritePokemons = JSON.parse(localStorage.getItem("favoritePokemons"));

  const favoritePokemonsIds = favoritePokemons?.map((pokemon) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`;

    return <PokemonCard key={URL} pokemonUrl={URL} />;
  });

  return (
    <div className="bg-gray-200 min-h-screen">
      <main className="p-5">
        <h1 className="text-3xl font-bold mb-4">Favorite Pokemons</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoritePokemonsIds}
        </section>
      </main>
    </div>
  );
};

export default FavoritePokemons;
