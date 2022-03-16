/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from 'styles/theme/slice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
