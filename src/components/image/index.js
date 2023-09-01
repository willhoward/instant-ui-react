import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
	margin: 0;
	padding: 0;
	vertical-align: top;
`;

function Image({ src, alt }) {
	return (
		<StyledImage src={src} alt={alt} />
	);
}

export default Image;

Image.propTypes = {
	src: propTypes.string.isRequired,
	alt: propTypes.string.isRequired,
};
