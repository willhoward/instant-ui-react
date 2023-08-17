import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { useTheme } from "../Theme/Theme";

const { black, lightGray, white } = useTheme();

export const StyledButton = styled.button<ButtonProps>`
  height: 42px;
  border: none;
  padding: 0 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  background: ${({ primary }) => (primary ? white : black)};
  border: 1px solid ${({ primary }) => (primary ? white : lightGray)};
`;
