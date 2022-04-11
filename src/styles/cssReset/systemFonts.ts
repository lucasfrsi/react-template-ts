import { css } from 'styled-components';

/*
 * Add the correct System UI and Monospace UI font families
 * in Chrome, Edge, and Firefox.
 */
export default css`
  @font-face {
    font-family: system-ui;
    src: local('.AppleSystemUIFont'), local('Segoe UI'), local('Ubuntu'),
      local('Roboto-Regular'), local('HelveticaNeue');
  }

  @font-face {
    font-family: system-ui;
    font-style: italic;
    src: local('.AppleSystemUIFont'), local('Segoe UI Italic'),
      local('Ubuntu-Italic'), local('Roboto-Italic'),
      local('HelveticaNeue-Italic');
  }

  @font-face {
    font-family: system-ui;
    font-weight: bold;
    src: local('.AppleSystemUIFont'), local('Segoe UI Bold'),
      local('Ubuntu-Bold'), local('Roboto-Bold'), local('HelveticaNeue-Bold');
  }

  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: bold;
    src: local('.AppleSystemUIFont'), local('Segoe UI Bold Italic'),
      local('Ubuntu-BoldItalic'), local('Roboto-BoldItalic'),
      local('HelveticaNeue-BoldItalic');
  }

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
