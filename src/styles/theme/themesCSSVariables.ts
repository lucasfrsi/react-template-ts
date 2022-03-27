import themes, { Theme, ThemeType } from './themes';

/**
 * Build a string containing the CSS Variables for a given theme.
 * @param theme
 * @returns `string` built like this: `--color-primary:white;--color-secondary:black;`
 */
function getThemeCSSVariables(theme: ThemeType) {
  const choosenTheme = themes[theme];

  return (Object.keys(choosenTheme) as Array<keyof Theme>).reduce(
    (acc, cssVarName) => {
      // eslint-disable-next-line no-param-reassign
      acc += `${cssVarName}:${choosenTheme[cssVarName]};`;
      return acc;
    },
    ''
  );
}

/**
 * String containing `:root` and `attribute` selectors with the themes CSS Variables inside.
 */
const themesCSSVariables = (Object.keys(themes) as Array<ThemeType>).reduce(
  (acc, theme) => {
    // eslint-disable-next-line no-param-reassign
    acc += `:root[data-theme='${theme}']{${getThemeCSSVariables(theme)}}`;
    return acc;
  },
  ''
);

export default themesCSSVariables;

/*
  The themesCSSVariables string is something like this:

  :root[data-theme='light'] {
    --color-primary: #ffffffff;
    --color-text: #000000;
  }

  :root[data-theme='dark'] {
    --color-primary: #000000;
    --color-text: #ffffffff;
  }
  
  But in a minified version: :root[data-theme='light']{--color-primary:#ffffffff;--color-text:#000000;}
*/
