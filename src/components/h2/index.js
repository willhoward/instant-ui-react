import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
	font-size: 24px;
	line-height: 36px;
	font-weight: 600;
	color: ${({ theme }) => theme.white};
	margin: 0;
`;

function H2({ children }) {
	return (
		<StyledH2>
			{children}
		</StyledH2>
	);
}

export default H2;

H2.propTypes = {
	children: propTypes.node,
};

H2.defaultProps = {
	children: null,
};
