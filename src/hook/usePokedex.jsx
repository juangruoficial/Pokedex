import { useEffect, useState } from "react";
import {
  getAllPokemons,
  getAllTypes,
  getPokemonByTypes,
} from "../services/pokemons.services";
import { useSelector } from "react-redux";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [types, setTypes] = useState([]); // ['rock', 'water', 'fire'

  const { name } = useSelector((store) => store.trainer);

  const pokemonsFilteredByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    if (!pokemonType) {
      getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((error) => console.log(error));
    }
  }, [pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      getPokemonByTypes(pokemonType)
        .then((data) => setPokemons(data))
        .catch((error) => console.log(error));
    }
  }, [pokemonType]);

  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((error) => console.log(error));
  }, []);

  return {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonsFilteredByName,
    types,
  };
};
export default usePokedex;
