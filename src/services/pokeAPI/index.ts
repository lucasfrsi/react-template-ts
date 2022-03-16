import pokeAPIClient from './instance';

const getPokemon = (nameOrId: string) =>
  pokeAPIClient.get(`pokemon/${nameOrId}`);

const pokeAPI = {
  getPokemon,
};

export default pokeAPI;
