import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function Card({ children }) {
  const { black, lightGray } = useContext(ThemeContext);

  const style = {
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    padding: '24px',
    border: `1px solid ${lightGray}`,
    borderRadius: '6px',
    background: black,
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Card;

Card.propTypes = {
  children: propTypes.node,
};

Card.defaultProps = {
  children: null,
};
