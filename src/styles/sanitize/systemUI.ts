import { css } from 'styled-components';

export default css`
  /**
  * Add the correct system-ui font-family in Firefox.
  */

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
`;
