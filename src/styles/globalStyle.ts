import { createGlobalStyle } from 'styled-components';
import { cvar } from 'styles';
import cssReset from './cssReset';
import themesCSSVariables from './theme/themesCSSVariables';
import globalCSSVariables from './globalCSSVariables';

const GlobalStyle = createGlobalStyle`
  /* Custom CSS Reset */
  ${cssReset}

  /* Themes and Global CSS Variables */
  ${themesCSSVariables}
  ${globalCSSVariables}

  /* Opinionated Defaults */
  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  body {
    /* Default the base font-size to 13px */
    font-size: ${cvar('--font-size-base')};
  }
`;

export default GlobalStyle;
