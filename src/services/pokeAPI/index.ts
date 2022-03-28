import { AxiosResponse } from 'axios';
import { Pokemon } from 'interfaces';
import pokeAPIClient from './instance';

interface PokeAPIGetPokemon {
  (nameOrId: string): Promise<AxiosResponse<Pokemon>>;
}

const getPokemon: PokeAPIGetPokemon = (nameOrId: string) =>
  pokeAPIClient.get(`pokemon/${nameOrId}`);

const pokeAPI = {
  getPokemon,
};

export default pokeAPI;
