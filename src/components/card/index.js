import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 6px;
  background: ${({ theme }) => theme.black};
`;

function Card({ children }) {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
}

export default Card;

Card.propTypes = {
  children: propTypes.node,
};

Card.defaultProps = {
  children: null,
};
