import React from 'react';
import { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';

const defaultTheme = {
  black: '#000000',
  darkestGray: '#0A0A0A',
  darkGray: '#232323',
  lightGray: '#1A1A1A',
  lightestGray: '#999999',
  white: '#FFFFFF',
};

function InstantThemeProvider({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}

export default InstantThemeProvider;

InstantThemeProvider.propTypes = {
  children: propTypes.node,
};

InstantThemeProvider.defaultProps = {
  children: null,
};
