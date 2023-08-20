import React from "react";
import { ButtonProps } from "./Button.types";
import { useTheme } from "../Theme/Theme";

export function Button({
  type = "button",
  text,
  disabled = false,
  primary = true,
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const { black, lightGray, white } = useTheme();

  const buttonStyle = {
    width: fullWidth ? "100%" : "auto",
    height: "42px",
    padding: "0 12px",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
    background: primary ? white : black,
    border: `1px solid ${primary ? white : lightGray}`,
    color: primary ? black : lightGray,
  };

  return (
    <button
      style={buttonStyle}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
