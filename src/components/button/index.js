import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  box-sizing: border-box;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  height: 42px;
  padding: 0 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ theme, $primary }) => ($primary ? theme.white : theme.darkestGray)};
  border: 1px solid ${({ theme, $primary }) => ($primary ? theme.white : theme.lightGray)};
  color: ${({ theme, $primary }) => ($primary ? theme.black : theme.lightestGray)};
`;

function Button({
  type,
  text,
  disabled,
  primary,
  onClick,
  fullWidth,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      $primary={primary}
      $fullWidth={fullWidth}
    >
      {text}
    </StyledButton>
  );
}

export default Button;

Button.propTypes = {
  type: propTypes.string,
  text: propTypes.string,
  disabled: propTypes.bool,
  primary: propTypes.bool,
  onClick: propTypes.func,
  fullWidth: propTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  text: '',
  disabled: false,
  primary: false,
  onClick: () => null,
  fullWidth: false,
};
