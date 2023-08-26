import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function P({ children }) {
  const { lightestGray } = useContext(ThemeContext);

  const style = {
    fontSize: '14px',
    fontWeight: 400,
    color: lightestGray,
    lineHeight: '24px',
    margin: 0,
  };

  return (
    <p style={style}>
      {children}
    </p>
  );
}

export default P;

P.propTypes = {
  children: propTypes.node,
};

P.defaultProps = {
  children: null,
};
