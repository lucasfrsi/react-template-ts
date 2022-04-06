// === STYLE CONSTANTS =====================================
// ====================================================== //
// import { css } from 'styled-components';

// === COLORS ==============================================

enum Colors {
  brick = '#d77158ff',
  brown = 'rgba(58, 52, 51, 1)',
  brown_opac_1 = 'rgba(58, 52, 51, 0.7)',
  brown_opac_2 = 'rgba(58, 52, 51, 0.15)',
  brown_opac_3 = 'rgba(58, 52, 51, 0.05)',

  error = '#eb0400',
  warn = '#ffd37a',
  success = '#00f593',
  info = '#1f69ff',

  hinted_grey_1 = '#0e0e10',
  hinted_grey_2 = '#18181b',
  hinted_grey_3 = '#1f1f23',
  hinted_grey_4 = '#26262c',
  hinted_grey_5 = '#323239',
  hinted_grey_6 = '#3b3b44',
  hinted_grey_7 = '#53535f',
  hinted_grey_8 = '#848494',
  hinted_grey_9 = '#adadb8',
  hinted_grey_10 = '#c8c8d0',
  hinted_grey_11 = '#d3d3d9',
  hinted_grey_12 = '#dedee3',
  hinted_grey_13 = '#e6e6ea',
  hinted_grey_14 = '#efeff1',
  hinted_grey_15 = '#f7f7f8',

  opac_b_1 = 'rgba(0,0,0,0.05)',
  opac_b_2 = 'rgba(0,0,0,0.1)',
  opac_b_3 = 'rgba(0,0,0,0.15)',
  opac_b_4 = 'rgba(0,0,0,0.2)',
  opac_b_5 = 'rgba(0,0,0,0.25)',
  opac_b_6 = 'rgba(0,0,0,0.3)',
  opac_b_7 = 'rgba(0,0,0,0.4)',
  opac_b_8 = 'rgba(0,0,0,0.5)',
  opac_b_9 = 'rgba(0,0,0,0.6)',
  opac_b_10 = 'rgba(0,0,0,0.7)',
  opac_b_11 = 'rgba(0,0,0,0.75)',
  opac_b_12 = 'rgba(0,0,0,0.8)',
  opac_b_13 = 'rgba(0,0,0,0.85)',
  opac_b_14 = 'rgba(0,0,0,0.9)',
  opac_b_15 = 'rgba(0,0,0,0.95)',

  opac_w_1 = 'hsla(0,0%,100%,0.05)',
  opac_w_2 = 'hsla(0,0%,100%,0.1)',
  opac_w_3 = 'hsla(0,0%,100%,0.15)',
  opac_w_4 = 'hsla(0,0%,100%,0.2)',
  opac_w_5 = 'hsla(0,0%,100%,0.25)',
  opac_w_6 = 'hsla(0,0%,100%,0.3)',
  opac_w_7 = 'hsla(0,0%,100%,0.4)',
  opac_w_8 = 'hsla(0,0%,100%,0.5)',
  opac_w_9 = 'hsla(0,0%,100%,0.6)',
  opac_w_10 = 'hsla(0,0%,100%,0.7)',
  opac_w_11 = 'hsla(0,0%,100%,0.75)',
  opac_w_12 = 'hsla(0,0%,100%,0.8)',
  opac_w_13 = 'hsla(0,0%,100%,0.85)',
  opac_w_14 = 'hsla(0,0%,100%,0.9)',
  opac_w_15 = 'hsla(0,0%,100%,0.95)',

  white = '#fff',
  black = '#000',

  transparent = 'transparent',
}

// === TYPOGRAPHY ==========================================

enum FontType {
  base = '',
  display = '',
}

enum FontSize {
  extraExtraLarge = '5.4rem',
  extraLarge = '3.6rem',
  large = '2.4rem',
  medium = '1.8rem',
  base = '1.6rem',
  small = '1.4rem',
  extrasmall = '1.2rem',
  extraExtraSmall = '1rem',
}

enum FontWeight {
  thin = '100',
  light = '300',
  regular = '400',
  medium = '500',
  bold = '700',
  black = '900',
}

enum LineHeight {
  body = '1.5',
  heading = '1.2',
}

// === BORDER ==============================================

enum BorderRadius {
  none = '0',
  small = '0.2rem',
  medium = '0.4rem',
  large = '0.6rem',
  extraLarge = '1rem',
  extraExtraLarge = '1.6rem',
  rounded = '9000px',
}

enum BorderWidth {
  default = '1px',
  input = '2px',
  inputOverlayUnfocused = '1px',
  marked = '3px',
  spinner = '2px',
  tag = '2px',
}

// === MISC ================================================

enum ZIndex {
  modal = '5000',
  notification = '4000',
  overlay = '3000',
  balloon = '2000',
  sticky = '1000',
  above = '10',
  default = '1',
  below = '-1',
}

// === MIXINS ==============================================

// const flexCol = css`
//   display: flex;
//   flex-direction: column;
// `;

// =========================================================

const STYLE = {
  // Colors
  colors: Colors,
  font: {
    type: FontType,
    size: FontSize,
    weight: FontWeight,
  },
  lineHeight: LineHeight,
  // Border
  border: {
    radius: BorderRadius,
    width: BorderWidth,
  },
  // Miscellaneous
  zIndex: ZIndex,
  // Mixins
  mixins: {},
};

export default STYLE;
