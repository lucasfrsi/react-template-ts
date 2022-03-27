// === GLOBAL CSS VARIABLES ================================
// ====================================================== //

export const cssVariables = {
  '--font-size-1': '5.4rem',
  '--font-size-2': '3.6rem',
  '--font-size-3': '2.4rem',
  '--font-size-4': '1.8rem',
  '--font-size-5': '1.4rem',
  '--font-size-6': '1.3rem',
  '--font-size-7': '1.2rem',
  '--font-size-8': '1.2rem',
  '--font-size-base': '1.3rem',
};
export type GlobalCSSVariables = typeof cssVariables;

/**
 * String built based on the cssVariables object.
 * It looks something like this:
 * `--css-variable-name:value;--css-variable-name:value;`
 */
const globalCSSVariablesString = (
  Object.keys(cssVariables) as Array<keyof GlobalCSSVariables>
).reduce((acc, cssVarName) => {
  // eslint-disable-next-line no-param-reassign
  acc += `${cssVarName}:${cssVariables[cssVarName]};`;
  return acc;
}, '');

/**
 * String containing a `:root` selector with the global CSS Variables inside.
 */
const globalCSSVariables = `:root{${globalCSSVariablesString}}`;

export default globalCSSVariables;
