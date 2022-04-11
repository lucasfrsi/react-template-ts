// === THEMES ==============================================
// ====================================================== //
import STYLE from 'styles/constants';

const light = {
  '--color-text': STYLE.colors.black,
  '--color-background': STYLE.colors.white,
};

const dark: Theme = {
  '--color-text': STYLE.colors.white,
  '--color-background': STYLE.colors.black,
};

const themes = {
  light,
  dark,
};

export type Theme = typeof light;
export type ThemeType = keyof typeof themes;
export default themes;
