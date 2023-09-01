import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-family: ${({ theme }) => theme.fontFamily};
	font-size: 32px;
	line-height: 48px;
	font-weight: 500;
	color: ${({ theme }) => theme.white};
	margin: 0;
`;

function H1({ children }) {
	return (
		<StyledH1>
			{children}
		</StyledH1>
	);
}

export default H1;

H1.propTypes = {
	children: propTypes.node,
};

H1.defaultProps = {
	children: null,
};
