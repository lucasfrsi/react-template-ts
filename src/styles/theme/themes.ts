// === THEMES ==============================================
// ====================================================== //

const light = {
  '--color-primary': '#d77158ff',
  '--color-text': '#3a3433ff',
  '--color-text-secondary': '#3a3433b3',
  '--color-background': '#ffffffff',
  '--color-background-variant': '#fbf9f9ff',
  '--color-border': '#3a34331f',
  '--color-border-light': '#3a34330d',
};

const dark: Theme = {
  '--color-primary': '#dc785fff',
  '--color-text': '#f1e9e7ff',
  '--color-text-secondary': '#f1e9e799',
  '--color-background': '#000000ff',
  '--color-background-variant': '#1c1a1aff',
  '--color-border': '#f1e9e726',
  '--color-border-light': '#f1e9e70d',
};

const themes = {
  light,
  dark,
};

export type Theme = typeof light;
export type ThemeType = keyof typeof themes;
export default themes;
