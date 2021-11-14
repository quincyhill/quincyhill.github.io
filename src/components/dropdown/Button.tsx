import React from 'react'
import {ThemeInterface} from "../../themes/theme"
import styled from 'styled-components';

const Button = styled.button<{theme: ThemeInterface}>`
	background-image: ${(props) => props.theme.gradient};
	border-radius: 5px;
	border: 0px solid transparent;
	color: ${(props) => props.theme.text};
	margin: 0 1em;
	padding: 0.25em 1em;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.10), 0 0px 40px rgba(0, 0, 0, 0.08);
	height: 2rem;
`

export default Button;
