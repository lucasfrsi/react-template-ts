import { css } from 'styled-components';
import { sizes } from 'styles/media';
import { media } from 'styles';

describe('media', () => {
  it('should return media query in css', () => {
    const mediaQuery = media.sm`color: red;`.join('');

    const cssVersion = css`
      @media (min-width: ${sizes.sm}px) {
        color: red;
      }
    `.join('');

    expect(mediaQuery).toBe(cssVersion);
  });
});
