import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledH3 = styled.h3`
	font-size: 18px;
	line-height: 30px;
	font-weight: 600;
	color: ${({ theme }) => theme.lightestGray};
	margin: 0;
`;

function H3({ children }) {
	return (
		<StyledH3>
			{children}
		</StyledH3>
	);
}

export default H3;

H3.propTypes = {
	children: propTypes.node,
};

H3.defaultProps = {
	children: null,
};
