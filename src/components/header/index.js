import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function Header({ children }) {
  const { black, lightGray } = useContext(ThemeContext);

  const style = {
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    padding: '12px 24px',
    borderBottom: `1px solid ${lightGray}`,
    background: black,
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Header;

Header.propTypes = {
  children: propTypes.node,
};

Header.defaultProps = {
  children: null,
};
