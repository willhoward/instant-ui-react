import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  priority?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
