import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpacer = styled.div`
	width: ${({ $horizontal, $size }) => ($horizontal ? `${$size * 6}px` : 0)};
	height: ${({ $horizontal, $size }) => ($horizontal ? 0 : `${$size * 6}px`)};
`;

function Spacer({ horizontal, size }) {
	return (
		<StyledSpacer $horizontal={horizontal} $size={size} />
	);
}

export default Spacer;

Spacer.propTypes = {
	horizontal: propTypes.bool,
	size: propTypes.number,
};

Spacer.defaultProps = {
	horizontal: false,
	size: 1,
};
