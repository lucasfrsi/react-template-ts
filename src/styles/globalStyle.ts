import { createGlobalStyle } from 'styled-components';
import sanitize from './sanitize';

const GlobalStyle = createGlobalStyle`
  ${sanitize}

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
