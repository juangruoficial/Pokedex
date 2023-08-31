import axios from "axios";

export const getAllPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URL);
  return data.results;
};

export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
  };

  return pokemon;
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

const formatStats = (stats) => {
  return stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
};

export const joinPokemonTypes = (types = []) => {
  return types.slice(0, 2).join(" / ");
};

export const getPokemonByTypes = async (pokemonType) => {
  const URL = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
  const { data } = await axios.get(URL);
  const formattedPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return formattedPokemons;
};

export const getPokemonById = async (pokemonId) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const { data } = await axios.get(URL);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    weight: data.weight,
    height: data.height,
    abilities: data.abilities.map((ability) => ability.ability.name),
    moves: data.moves.map((move) => move.move.name),
  };

  return pokemon;
};

export const getAllTypes = async () => {
  const URL = "https://pokeapi.co/api/v2/type/";
  const { data } = await axios.get(URL);
  return data.results;
};
