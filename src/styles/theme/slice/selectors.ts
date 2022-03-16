import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';

import themes from '../themes';
import { initialState } from '.';
import { isSystemDark } from '../utils';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  (theme) => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.dark : themes.light;
    }
    return themes[theme.selected];
  }
);

export const selectThemeKey = createSelector(
  [(state) => state.theme || initialState],
  (theme) => theme.selected
);
