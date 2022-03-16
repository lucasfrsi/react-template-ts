import { css } from 'styled-components';

export default css`
  /**
  * Add the correct system-ui font-family in Chrome, Edge, and Firefox.
  */

  @font-face {
    font-family: ui-monospace;
    src: local('.AppleSystemUIFontMonospaced-Regular'), local('Segoe UI Mono'),
      local('UbuntuMono'), local('Roboto-Mono'), local('Menlo');
  }

  @font-face {
    font-family: ui-monospace;
    font-style: italic;
    src: local('.AppleSystemUIFontMonospaced-RegularItalic'),
      local('Segoe UI Mono Italic'), local('UbuntuMono-Italic'),
      local('Roboto-Mono-Italic'), local('Menlo-Italic');
  }

  @font-face {
    font-family: ui-monospace;
    font-weight: bold;
    src: local('.AppleSystemUIFontMonospaced-Bold'), local('Segoe UI Mono Bold'),
      local('UbuntuMono-Bold'), local('Roboto-Mono-Bold'), local('Menlo-Bold');
  }

  @font-face {
    font-family: ui-monospace;
    font-style: italic;
    font-weight: bold;
    src: local('.AppleSystemUIFontMonospaced-BoldItalic'),
      local('Segoe UI Mono Bold Italic'), local('UbuntuMono-BoldItalic'),
      local('Roboto-Mono-BoldItalic'), local('Menlo-BoldItalic');
  }
`;
