import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function H3({ children }) {
  const { lightestGray } = useContext(ThemeContext);

  const style = {
    fontSize: '18px',
    lineHeight: '30px',
    fontWeight: 600,
    color: lightestGray,
    margin: 0,
  };

  return (
    <h3 style={style}>
      {children}
    </h3>
  );
}

export default H3;

H3.propTypes = {
  children: propTypes.node,
};

H3.defaultProps = {
  children: null,
};
