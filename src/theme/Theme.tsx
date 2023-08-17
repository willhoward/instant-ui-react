import React, { createContext } from "react";
import { ThemeContextType, ThemeProviderProps } from "./Theme.types";

const defaultTheme = {
  colors: {
    black: "#000000",
    darkGray: "#121212",
    midGray: "#232323",
    lightGray: "#A7A7A7",
    white: "#FFFFFF",
  },
};

export const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  <ThemeContext.Provider value={defaultTheme}>
    {children}
  </ThemeContext.Provider>;
};
