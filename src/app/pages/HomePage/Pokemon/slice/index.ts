import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from 'interfaces';
import { PokemonState } from './types';

export const initialState: PokemonState = {
  loading: false,
  nameOrId: 'Bulbasaur',
  pokemon: null,
};

const slice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    changeNameOrId(state, action: PayloadAction<string>) {
      state.nameOrId = action.payload;
    },
    findPokemon(state) {
      state.loading = true;
      state.pokemon = null;
    },
    pokemonFound(state, action: PayloadAction<Pokemon>) {
      state.pokemon = action.payload;
      state.loading = false;
    },
    pokemonError(state) {
      state.loading = false;
    },
  },
});

export const { actions: pokemonActions } = slice;
export default slice.reducer;
