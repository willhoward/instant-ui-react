import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.lightestGray};
  line-height: 24px;
  margin: 0;
`;

function P({ children }) {
  return (
    <StyledP>
      {children}
    </StyledP>
  );
}

export default P;

P.propTypes = {
  children: propTypes.node,
};

P.defaultProps = {
  children: null,
};
