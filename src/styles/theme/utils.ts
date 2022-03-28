import { localStorageAvailable } from 'utils';
import { ThemeType } from './themes';

function getSystemPreference(): ThemeType {
  const isSystemDark = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false;

  return isSystemDark ? 'dark' : 'light';
}

function updateDataAttribute(theme: ThemeType) {
  const html = document.documentElement;
  html.dataset.theme = theme;
}

export function getInitialTheme(): ThemeType {
  let theme: ThemeType;

  if (localStorageAvailable) {
    const storedTheme = localStorage.getItem('theme') as ThemeType | null;
    theme = storedTheme || getSystemPreference();
  } else {
    theme = getSystemPreference();
  }

  updateDataAttribute(theme);
  return theme;
}

export function saveTheme(theme: ThemeType) {
  updateDataAttribute(theme);
  if (localStorageAvailable) localStorage.setItem('theme', theme);
}
