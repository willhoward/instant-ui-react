import React from 'react';
import { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';

function InstantThemeProvider({ children, fontFamily }) {
	const defaultTheme = {
		black: '#000000',
		darkestGray: '#0A0A0A',
		darkGray: '#232323',
		lightGray: '#1A1A1A',
		lightestGray: '#999999',
		white: '#FFFFFF',
		fontFamily,
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			{children}
		</ThemeProvider>
	);
}

export default InstantThemeProvider;

InstantThemeProvider.propTypes = {
	children: propTypes.node,
	fontFamily: propTypes.string,
};

InstantThemeProvider.defaultProps = {
	children: null,
	fontFamily: 'sans-serif',
};
