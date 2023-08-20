import { MouseEventHandler } from "react";

export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
}
