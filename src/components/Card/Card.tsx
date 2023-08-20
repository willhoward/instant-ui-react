import React from "react";
import { useTheme } from "../Theme/Theme";
import { CardProps } from "./Card.types";

export function Card({ children = null }: CardProps) {
  const { darkGray } = useTheme();

  const cardStyle = {
    width: "100%",
    height: "auto",
    padding: "24px",
    border: `1px solid ${darkGray}`,
    borderRadius: "12px",
    fontSize: "14px",
    cursor: "pointer",
    background: "transparent",
  };

  return (
    <div style={cardStyle} data-testid="card">
      {children}
    </div>
  );
}
