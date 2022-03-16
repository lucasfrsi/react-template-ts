import { css } from 'styled-components';
import assets from './assets';
import reduceMotion from './reduceMotion';
import sanitize from './sanitize';
import systemUI from './systemUI';
import typography from './typography';
import uiMonospace from './uiMonospace';

export default css`
  ${assets}
  ${reduceMotion}
  ${sanitize}
  ${systemUI}
  ${typography}
  ${uiMonospace}
`;
