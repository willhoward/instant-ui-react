import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<ButtonProps>`
	height: 40px;
	border: none;
	padding: 0 12px;
	border-radius: 6px;
	font-size: 14px;
	cursor: pointer;
`;
