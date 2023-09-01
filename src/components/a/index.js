import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledA = styled.a`
	font-family: ${({ theme }) => theme.fontFamily};
	font-size: 14px;
	font-weight: 400;
	color: ${({ theme }) => theme.lightestGray};
	line-height: 24px;
	margin: 0;
	text-decoration: ${({ $underlined }) => ($underlined ? 'underline' : 'none')};

	&:hover {
		color: ${({ theme }) => theme.white};
	}
`;

function A({
	href,
	target,
	underlined,
	children,
}) {
	return (
		<StyledA href={href} target={target} $underlined={underlined}>
			{children}
		</StyledA>
	);
}

export default A;

A.propTypes = {
	href: propTypes.string,
	target: propTypes.string,
	underlined: propTypes.bool,
	children: propTypes.node,
};

A.defaultProps = {
	href: '',
	target: '_self',
	underlined: false,
	children: null,
};
