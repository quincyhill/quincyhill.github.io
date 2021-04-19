import React from 'react'
import { darkGrey, primaryColor, footerBackgroundColor } from '../../themes/colors'
import styled from 'styled-components';

// Still need to work on this hover thing it annoys me
const Button = styled.button`
	background: ${(props) =>
		props.color == primaryColor ? primaryColor : darkGrey};
	border-radius: 3px;
	border: 2px solid
		${(props) => (props.color == primaryColor ? darkGrey : primaryColor)};
	color: ${(props) => (props.color == primaryColor ? darkGrey : primaryColor)};
	margin: 0 1em;
	padding: 0.25em 1em;
`

export default Button;
