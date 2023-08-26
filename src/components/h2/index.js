import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function H2({ children }) {
  const { white } = useContext(ThemeContext);

  const style = {
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 600,
    color: white,
    margin: 0,
  };

  return (
    <h2 style={style}>
      {children}
    </h2>
  );
}

export default H2;

H2.propTypes = {
  children: propTypes.node,
};

H2.defaultProps = {
  children: null,
};
