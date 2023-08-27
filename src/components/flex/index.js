import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledFlex = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-items: center;
	align-items: center;
	gap: 12px;
`;

const StyledFlexGrow = styled.div`
	box-sizing: border-box;
	flex: 1 1 auto;
`;

const StyledFlexShrink = styled.div`
	box-sizing: border-box;
	flex: 0 0 content;
`;

const StyledFlexEqual = styled.div`
	box-sizing: border-box;
	flex: 1 0 0;
`;

export function Flex({ children }) {
	return (
		<StyledFlex>
			{children}
		</StyledFlex>
	);
}

Flex.propTypes = {
	children: propTypes.node,
};

Flex.defaultProps = {
	children: null,
};

export function FlexGrow({ children }) {
	return (
		<StyledFlexGrow>
			{children}
		</StyledFlexGrow>
	);
}

FlexGrow.propTypes = {
	children: propTypes.node,
};

FlexGrow.defaultProps = {
	children: null,
};

export function FlexShrink({ children }) {
	return (
		<StyledFlexShrink>
			{children}
		</StyledFlexShrink>
	);
}

FlexShrink.propTypes = {
	children: propTypes.node,
};

FlexShrink.defaultProps = {
	children: null,
};

export function FlexEqual({ children }) {
	return (
		<StyledFlexEqual>
			{children}
		</StyledFlexEqual>
	);
}

FlexEqual.propTypes = {
	children: propTypes.node,
};

FlexEqual.defaultProps = {
	children: null,
};
