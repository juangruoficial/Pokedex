import { useEffect, useState } from "react";

const usePokemonInfo = ({ pokemonData }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    const favoritesFromLocalStorage = localStorage.getItem("favoritePokemons");
    console.log(favoritesFromLocalStorage);
    if (favoritesFromLocalStorage) {
      const parsedFavorites = JSON.parse(favoritesFromLocalStorage);
      setFavoritePokemons(parsedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  const addToFavorites = () => {
    if (isFavorite) {
      const newFavoritePokemons = favoritePokemons.filter(
        (favPokemon) => favPokemon.id !== pokemonData.id
      );
      setFavoritePokemons(newFavoritePokemons);
      setIsFavorite(false);
      return;
    } else {
      const newFavoritePokemon = { ...pokemonData, isFavorite: true };
      const newFavoritePokemons = [...favoritePokemons, newFavoritePokemon];
      setFavoritePokemons(newFavoritePokemons);
      setIsFavorite(true);
    }
  };

  return {
    isFavorite,
    addToFavorites,
    setIsFavorite,
  };
};
export default usePokemonInfo;
