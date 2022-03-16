import { css } from 'styled-components';

export default css`
  /**
  * Restrict sizing to the page width in all browsers (opinionated).
  */

  :where(iframe, img, input, video, select, textarea) {
    height: auto;
    max-width: 100%;
  }
`;
