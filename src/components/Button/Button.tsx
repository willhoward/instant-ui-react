import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export function Button({
  text,
  disabled,
  primary = true,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      type="button"
      disabled={disabled}
      primary={primary}
      onClick={onClick}
      data-testid="button"
    >
      {text}
    </StyledButton>
  );
}
