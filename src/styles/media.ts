// === MEDIA QUERIES UTILITY ===============================
// ====================================================== //

import {
  css,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation,
} from 'styled-components';

// Breakpoints
const sizes = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
  xxl: 1600,
};

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    // eslint-disable-next-line no-param-reassign
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: MediaFunction }
);

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 * @types/styled-component is not working properly as explained above.
 * This is likely to be fixed in future versions.
 */
type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

/* 
  >> How to use:

  const SomeDiv = styled.div`
    display: flex;
    ...

    ${media.md`
      display: block;
    `}
  `;
*/
