import { css } from 'styled-components';

export default css`
  // === DOCUMENT ===

  /**
  * 0. Remove margin and padding from everything (opinionated).
  * 1. Add border box sizing in all browsers (opinionated).
  * 2. Backgrounds do not repeat by default (opinionated).
  */

  *,
  ::before,
  ::after {
    margin: 0; /* 0 */
    padding: 0; /* 0 */
    box-sizing: border-box; /* 1 */
    background-repeat: no-repeat; /* 2 */
  }

  /**
  * 1. Add text decoration inheritance in all browsers (opinionated).
  * 2. Add vertical alignment inheritance in all browsers (opinionated).
  */

  ::before,
  ::after {
    text-decoration: inherit; /* 1 */
    vertical-align: inherit; /* 2 */
  }

  /**
  * 1. Use the default cursor in all browsers (opinionated).
  * 2. Change the line height in all browsers (opinionated).
  * 3. Breaks words to prevent overflow in all browsers (opinionated).
  * 4. Use a 2-space tab width in all browsers (opinionated).
  * 5. Remove the grey highlight on links in iOS (opinionated).
  * 6. Prevent adjustments of font size after orientation changes in iOS.
  */

  :where(:root) {
    cursor: default; /* 1 */
    line-height: 1.4; /* 2 */
    overflow-wrap: break-word; /* 3 */
    tab-size: 2; /* 4 */
    -webkit-tap-highlight-color: transparent; /* 5 */
    text-size-adjust: 100%; /* 6 */
  }

  /**
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

  // === GROUPING CONTENT ===

  /**
  * Remove the list style on navigation lists in all browsers (opinionated).
  */

  :where(nav) :where(ol, ul) {
    list-style-type: none;
  }

  // === EMBEDDED CONTENT ===

  /**
  * Change the alignment on media elements in all browsers (opinionated).
  */

  :where(audio, canvas, iframe, img, svg, video) {
    vertical-align: middle;
  }

  /**
  * Remove the border on iframes in all browsers (opinionated).
  */

  :where(iframe) {
    border-style: none;
  }

  /**
  * Change the fill color to match the text color in all browsers (opinionated).
  */

  :where(svg:not([fill])) {
    fill: currentColor;
  }

  // === TABULAR DATA ===

  /**
  * 1. Collapse border spacing in all browsers (opinionated).
  * 2. Correct table border color in Chrome, Edge, and Safari.
  * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.
  */

  :where(table) {
    border-collapse: collapse; /* 1 */
    border-color: currentColor; /* 2 */
    text-indent: 0; /* 3 */
  }

  // === FORMS ===

  /**
  * Correct the inability to style buttons in iOS and Safari.
  */

  :where(button, [type='button' i], [type='reset' i], [type='submit' i]) {
    -webkit-appearance: button;
  }

  /**
  * Add the correct vertical alignment in Chrome, Edge, and Firefox.
  */

  :where(progress) {
    vertical-align: baseline;
  }

  /**
  * Change the resize direction in all browsers (opinionated).
  */

  :where(textarea) {
    resize: vertical;
  }

  /**
  * Correct the cursor style of increment and decrement buttons in Safari.
  */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  * Correct the text style of placeholders in Chrome, Edge, and Safari.
  */

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  /**
  * 1. Correct the inability to style upload buttons in iOS and Safari.
  * 2. Change font properties to 'inherit' in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  // === ACCESSIBILITY ===

  /**
  * Change the cursor on busy elements in all browsers (opinionated).
  */

  :where([aria-busy='true' i]) {
    cursor: progress;
  }

  /**
  * Change the cursor on disabled, not-editable, or otherwise
  * inoperable elements in all browsers (opinionated).
  */

  :where([aria-disabled='true' i], [disabled]) {
    cursor: not-allowed;
  }
`;
