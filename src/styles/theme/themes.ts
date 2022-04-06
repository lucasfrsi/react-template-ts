// === THEMES ==============================================
// ====================================================== //
import STYLE from 'styles/constants';

const light = {
  '--color-primary': STYLE.colors.brick,
  '--color-text': STYLE.colors.brown,
  '--color-text-secondary': STYLE.colors.brown_opac_1,
  '--color-background': STYLE.colors.white,
  '--color-background-variant': STYLE.colors.hinted_grey_15,
  '--color-border': STYLE.colors.brown_opac_2,
  '--color-border-light': STYLE.colors.brown_opac_3,
};

const dark: Theme = {
  '--color-primary': STYLE.colors.brick,
  '--color-text': STYLE.colors.white,
  '--color-text-secondary': STYLE.colors.opac_w_9,
  '--color-background': STYLE.colors.black,
  '--color-background-variant': STYLE.colors.opac_w_3,
  '--color-border': STYLE.colors.opac_w_3,
  '--color-border-light': STYLE.colors.opac_w_1,
};

const themes = {
  light,
  dark,
};

export type Theme = typeof light;
export type ThemeType = keyof typeof themes;
export default themes;
