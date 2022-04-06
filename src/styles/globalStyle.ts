import { createGlobalStyle } from 'styled-components';
import STYLE from './constants';
import cssReset from './cssReset';
import themesCSSVariables from './theme/themesCSSVariables';

const GlobalStyle = createGlobalStyle`
  /* Custom CSS Reset */
  ${cssReset}

  /* Themes and Global CSS Variables */
  ${themesCSSVariables}

  /* Opinionated Defaults */
  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  body {
    /* Default the base font-size to 16px */
    font-size: ${STYLE.font.size.base};
  }
`;

export default GlobalStyle;
