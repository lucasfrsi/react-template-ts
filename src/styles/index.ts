import { cssVariables, GlobalCSSVariables } from './globalCSSVariables';
import themes, { Theme, ThemeType } from './theme/themes';

/**
 * Utility function to get a global or theme CSS Variable name,
 * providing autocompletion.
 * @param cssVariableName
 * @returns `var(cssVariableName)` as `string`
 */
export function cvar(cssVariableName: keyof GlobalCSSVariables | keyof Theme) {
  return `var(${cssVariableName})`;
}

/**
 * Get a global CSS Variable value directly.
 * Use it when `cvar()` is not an option.
 * @param cssVariableName
 * @returns a global CSS Variable value
 */
export function cvarG(cssVariableName: keyof GlobalCSSVariables) {
  return cssVariables[cssVariableName];
}

/**
 * Get a theme CSS Variable value directly.
 * Use it when `cvar()` is not an option.
 * @param theme
 * @param cssVariableName
 * @returns a theme CSS Variable value
 */
export function cvarT(theme: ThemeType, cssVariableName: keyof Theme) {
  return themes[theme][cssVariableName];
}
