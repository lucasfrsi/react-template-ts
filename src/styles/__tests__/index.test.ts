import { cvar } from 'styles';
import themes, { Theme } from 'styles/theme/themes';

describe('cvar', () => {
  it('should return a var() string with the passed argument', () => {
    const lightTheme = themes.light;
    const themeKeys = Object.keys(lightTheme) as (keyof Theme)[];

    const firstVariable = themeKeys[0] as keyof Theme;

    expect(cvar(firstVariable)).toBe(`var(${firstVariable})`);
  });
});
