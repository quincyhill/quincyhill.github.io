import React from 'react'
import { darkGrey, primaryColor } from '../../themes/colors'
import {ThemeInterface} from "../../themes/theme"
import styled from 'styled-components';

const Button = styled.button<{theme: ThemeInterface}>`
	background: ${(props) => props.theme.body};
	border-radius: 3px;
	border: 2px solid
		${(props) => (props.color == primaryColor ? darkGrey : primaryColor)};
	color: ${(props) => props.theme.text};
	margin: 0 1em;
	padding: 0.25em 1em;
`

export default Button;
