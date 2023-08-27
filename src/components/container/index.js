import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default Container;

Container.propTypes = {
  children: propTypes.node,
};

Container.defaultProps = {
  children: null,
};
