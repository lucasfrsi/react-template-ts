import { css } from 'styled-components';
import STYLE from 'styles/constants';
import systemFonts from './systemFonts';
import typography from './typography';

const cssReset = css`
  /*
   * Normalize typography across all browsers by 
   * using System UI fonts
   */
  ${systemFonts}
  ${typography}

  /*
   * Remove some defaults
   * Use a more-intuitive box-sizing model
   */
  *,
  ::before,
  ::after {
    margin: 0;
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  /*
   * Allow percentage-based heights in the application
   */
  html,
  body {
    height: 100%;
  }

  /*
   * Typographic tweaks
   */
  body {
    line-height: ${STYLE.lineHeight.body};
    -webkit-font-smoothing: antialiased;
  }

  /*
   * Remove built-in form typography styles
   * Inherit color, font and letter-spacing
   */
  button,
  input,
  select,
  textarea {
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
  }

  /*
   * Improve media defaults
   */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /*
   * Avoid text overflows
   */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;

export default cssReset;
