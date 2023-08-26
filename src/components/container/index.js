import React from 'react';
import propTypes from 'prop-types';

function Container({ children }) {
  const style = {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Container;

Container.propTypes = {
  children: propTypes.node,
};

Container.defaultProps = {
  children: null,
};
