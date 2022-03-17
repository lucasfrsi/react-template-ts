import { AxiosResponse } from 'axios';
import { Pokemon } from 'interfaces';
import pokeAPIClient from './instance';

interface PokemonGetService {
  (nameOrId: string): Promise<AxiosResponse<Pokemon>>;
}

const getPokemon: PokemonGetService = (nameOrId: string) =>
  pokeAPIClient.get(`pokemon/${nameOrId}`);

const pokeAPI = {
  getPokemon,
};

export default pokeAPI;
