import React from 'react';
import propTypes from 'prop-types';

function Spacer({ horizontal, size }) {
  const style = {
    width: horizontal ? `${size * 6}px` : '0px',
    height: horizontal ? '0px' : `${size * 6}px`,
  };

  return (
    <div style={style} />
  );
}

export default Spacer;

Spacer.propTypes = {
  horizontal: propTypes.bool,
  size: propTypes.number,
};

Spacer.defaultProps = {
  horizontal: false,
  size: 1,
};
