import { Theme } from './theme/themes';

/**
 * Utility function to get a theme CSS Variable name.
 * @param cssVariableName
 * @returns `'var(cssVariableName)'`
 */
export function cvar(cssVariableName: keyof Theme) {
  return `var(${cssVariableName})`;
}

export { default as STYLE } from './constants';
export { default as GlobalStyle } from './globalStyle';
export { default as media } from './media';
