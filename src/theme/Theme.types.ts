import { ReactNode } from "react";

export interface ThemeContextType {
  colors: {
    black: string;
    darkGray: string;
    midGray: string;
    lightGray: string;
    white: string;
  };
}

export interface ThemeProviderProps {
  children: ReactNode;
}
