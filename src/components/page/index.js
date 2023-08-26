import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../theme';

function Page({ children }) {
  const { darkestGray } = useContext(ThemeContext);

  const style = {
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    background: darkestGray,
    padding: '48px 24px',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Page;

Page.propTypes = {
  children: propTypes.node,
};

Page.defaultProps = {
  children: null,
};
