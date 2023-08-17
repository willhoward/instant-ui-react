import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { useTheme } from "../Theme/Theme";

export function Button({
  text,
  disabled,
  primary = true,
  onClick,
}: ButtonProps) {
  const { black, lightGray, white } = useTheme();

  const StyledButton = styled.button<ButtonProps>`
    height: 42px;
    border: none;
    padding: 0 12px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    background: ${({ primary }) => (primary ? white : black)};
    border: 1px solid ${({ primary }) => (primary ? white : lightGray)};
  `;

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
