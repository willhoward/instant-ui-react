import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledHero = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	background: ${({ theme }) => theme.black};
	padding: 48px 24px;
	border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

function Hero({ children }) {
	return (
		<StyledHero>
			{children}
		</StyledHero>
	);
}

export default Hero;

Hero.propTypes = {
	children: propTypes.node,
};

Hero.defaultProps = {
	children: null,
};
