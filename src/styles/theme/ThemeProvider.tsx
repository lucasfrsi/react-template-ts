import React, { ReactChild } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useAppSelector } from 'hooks';
import { selectTheme } from './slice/selectors';

const ThemeProvider = ({ children }: { children: ReactChild }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(children)}
    </OriginalThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
