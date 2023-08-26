import React from 'react';
import propTypes from 'prop-types';

export function Flex({ children }) {
  const style = {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    gap: '12px',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

Flex.propTypes = {
  children: propTypes.node,
};

Flex.defaultProps = {
  children: null,
};

export function FlexGrow({ children }) {
  const style = {
    boxSizing: 'border-box',
    flex: '1 1 auto',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

FlexGrow.propTypes = {
  children: propTypes.node,
};

FlexGrow.defaultProps = {
  children: null,
};

export function FlexShrink({ children }) {
  const style = {
    boxSizing: 'border-box',
    flex: '0 0 content',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

FlexShrink.propTypes = {
  children: propTypes.node,
};

FlexShrink.defaultProps = {
  children: null,
};

export function FlexEqual({ children }) {
  const style = {
    boxSizing: 'border-box',
    flex: '1 0 0',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

FlexEqual.propTypes = {
  children: propTypes.node,
};

FlexEqual.defaultProps = {
  children: null,
};
