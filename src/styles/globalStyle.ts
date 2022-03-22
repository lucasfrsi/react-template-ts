import { createGlobalStyle } from 'styled-components';
import CSSReset from './CSSReset';

const GlobalStyle = createGlobalStyle`
  /* Custom CSS Reset */
  ${CSSReset}

  /* Opinionated Defaults */
  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  body {
    /* Default the font-size to 16px */
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
