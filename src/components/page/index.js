import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	background: ${({ theme }) => theme.darkestGray};
	padding: 48px 24px;
`;

function Page({ children }) {
	return (
		<StyledPage>
			{children}
		</StyledPage>
	);
}

export default Page;

Page.propTypes = {
	children: propTypes.node,
};

Page.defaultProps = {
	children: null,
};
