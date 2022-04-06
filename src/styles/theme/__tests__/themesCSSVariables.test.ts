import themes, { Theme, ThemeType } from '../themes';
import themesCSSVariables from '../themesCSSVariables';

describe('themesCSSVariables', () => {
  const listOfThemes = Object.keys(themes) as ThemeType[];

  it('should contain the proper root selectors', () => {
    listOfThemes.forEach((themeType) => {
      expect(
        themesCSSVariables.includes(`:root[data-theme='${themeType}']{`)
      ).toBe(true);
    });
  });

  it('should have the themes last key-value pair for each root selector to end in }', () => {
    listOfThemes.forEach((themeType) => {
      const theme = themes[themeType];
      const themeVariableKeys = Object.keys(theme) as (keyof Theme)[];
      const lastVariableName = themeVariableKeys[themeVariableKeys.length - 1];

      expect(
        themesCSSVariables.includes(
          `${lastVariableName}:${theme[lastVariableName]};}`
        )
      ).toBe(true);
    });
  });
});
