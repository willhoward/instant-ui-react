import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export function Button({
	text,
	disabled,
	priority = 'primary',
	onClick,
}: ButtonProps) {
	return (
    <StyledButton
      type='button'
      disabled={disabled}
      priority={priority}
      onClick={onClick}
		>
      {text}
    </StyledButton>
  );
}
