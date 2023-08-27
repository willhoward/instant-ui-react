import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 12px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  background: ${({ theme }) => theme.black};
`;

function Header({ children }) {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  );
}

export default Header;

Header.propTypes = {
  children: propTypes.node,
};

Header.defaultProps = {
  children: null,
};
