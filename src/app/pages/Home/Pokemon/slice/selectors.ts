import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';

const selectSlice = (state: RootState) => state.pokemon;

export const selectNameOrId = createSelector(
  [selectSlice],
  (pokemon) => pokemon.nameOrId
);

export const selectLoading = createSelector(
  [selectSlice],
  (pokemon) => pokemon.loading
);

export const selectPokemon = createSelector(
  [selectSlice],
  (pokemon) => pokemon.pokemon
);
