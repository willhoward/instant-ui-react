import React, { createContext, useMemo } from 'react';
import propTypes from 'prop-types';

const defaultTheme = {
  black: '#000000',
  darkestGray: '#0A0A0A',
  darkGray: '#232323',
  lightGray: '#1A1A1A',
  lightestGray: '#999999',
  white: '#FFFFFF',
};

export const ThemeContext = createContext(defaultTheme);

export function ThemeProvider({ children }) {
  const value = useMemo(() => defaultTheme, [defaultTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: propTypes.node,
};

ThemeProvider.defaultProps = {
  children: null,
};
