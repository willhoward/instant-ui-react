import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function Hero({ children }) {
  const { black, lightGray } = useContext(ThemeContext);

  const style = {
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    background: black,
    padding: '48px 24px',
    borderBottom: `1px solid ${lightGray}`,
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Hero;

Hero.propTypes = {
  children: propTypes.node,
};

Hero.defaultProps = {
  children: null,
};
