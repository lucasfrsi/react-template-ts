import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from 'styles/theme/slice';
import pokemonReducer from 'pages/HomePage/Pokemon/slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
