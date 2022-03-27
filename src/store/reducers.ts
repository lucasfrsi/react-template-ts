import { combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from 'pages/HomePage/Pokemon/slice';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
