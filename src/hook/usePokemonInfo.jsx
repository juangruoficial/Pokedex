import { useEffect, useState } from "react";

const initialState = JSON.parse(localStorage.getItem("favoritePokemons")) || [];

const usePokemonInfo = ({ pokemonData }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritePokemons, setFavoritePokemons] = useState(initialState);

  useEffect(() => {
    const favoritesFromLocalStorage = localStorage.getItem("favoritePokemons");
    if (favoritesFromLocalStorage) {
      const isAlreadyFavorite = JSON.parse(favoritesFromLocalStorage).some(
        (favPokemon) =>
          favPokemon?.id === pokemonData?.id && favPokemon.isFavorite === true
      );

      if (isAlreadyFavorite) {
        setFavoritePokemons(JSON.parse(favoritesFromLocalStorage));
        setIsFavorite(true);
      }
    }
  }, [pokemonData]);

  useEffect(() => {
    localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  const addToFavorites = () => {
    if (isFavorite) {
      const newFavoritePokemons = favoritePokemons.filter(
        (favPokemon) => favPokemon?.id !== pokemonData?.id
      );
      setFavoritePokemons(newFavoritePokemons);
      setIsFavorite(false);
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
    favoritePokemons,
  };
};

export default usePokemonInfo;
