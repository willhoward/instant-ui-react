import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function H1({ children }) {
  const { white } = useContext(ThemeContext);

  const style = {
    fontSize: '32px',
    lineHeight: '48px',
    fontWeight: 500,
    color: white,
    margin: 0,
  };

  return (
    <h1 style={style}>
      {children}
    </h1>
  );
}

export default H1;

H1.propTypes = {
  children: propTypes.node,
};

H1.defaultProps = {
  children: null,
};
