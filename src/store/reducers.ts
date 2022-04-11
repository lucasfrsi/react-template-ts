import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // Add your Redux slices here
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
