import React, { createContext, useContext } from "react";
import { ThemeContextType, ThemeProviderProps } from "./Theme.types";

const defaultTheme = {
  black: "#000000",
  darkestGray: "#121212",
  darkGray: "#232323",
  lightGray: "#313030",
  lightestGray: "#A7A7A7",
  white: "#FFFFFF",
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

// Use this function to access elements of the theme.
export function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useTheme has to be used within <ThemeProvider>");
  }

  return themeContext;
}
