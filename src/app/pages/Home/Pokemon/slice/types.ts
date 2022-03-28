import { Pokemon } from 'interfaces';

export interface PokemonState {
  nameOrId: string;
  pokemon: Pokemon | null;
  loading: boolean;
}
