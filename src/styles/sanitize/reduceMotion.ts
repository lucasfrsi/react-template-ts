import { css } from 'styled-components';

export default css`
  /** 
  * 1. Remove animations when motion is reduced (opinionated).
  * 2. Remove fixed background attachments when motion is reduced (opinionated).
  * 3. Remove timed scrolling behaviors when motion is reduced (opinionated).
  * 4. Remove transitions when motion is reduced (opinionated).
  */

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-delay: -1ms !important; /* 1 */
      animation-duration: 1ms !important; /* 1 */
      animation-iteration-count: 1 !important; /* 1 */
      background-attachment: initial !important; /* 2 */
      scroll-behavior: auto !important; /* 3 */
      transition-delay: 0s !important; /* 4 */
      transition-duration: 0s !important; /* 4 */
    }
  }
`;
