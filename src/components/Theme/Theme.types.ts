import { ReactNode } from "react";

export interface ThemeContextType {
  black: string;
  darkestGray: string;
  darkGray: string;
  lightGray: string;
  lightestGray: string;
  white: string;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
