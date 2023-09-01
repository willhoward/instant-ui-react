import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledCode = styled.code`
	background: transparent;
	background: ${({ theme }) => theme.lightGray};
	padding: 4px;
	border-radius: 3px;
	font-family: monospace;
	line-height: 24px;
	color: ${({ theme }) => theme.white};
`;

function Code({ children }) {
	return (
		<StyledCode>
			{children}
		</StyledCode>
	);
}

export default Code;

Code.propTypes = {
	children: propTypes.node,
};

Code.defaultProps = {
	children: null,
};
