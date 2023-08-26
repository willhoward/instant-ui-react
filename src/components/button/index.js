import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function Button({
  type,
  text,
  disabled,
  primary,
  onClick,
  fullWidth,
}) {
  const {
    black, darkestGray, lightGray, lightestGray, white,
  } = useContext(ThemeContext);

  const style = {
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : 'auto',
    height: '42px',
    padding: '0 12px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 400,
    cursor: disabled ? 'not-allowed' : 'pointer',
    background: primary ? white : darkestGray,
    border: `1px solid ${primary ? white : lightGray}`,
    color: primary ? black : lightestGray,
  };

  return (
    <button
      style={style}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
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
  primary: true,
  onClick: () => null,
  fullWidth: false,
};
