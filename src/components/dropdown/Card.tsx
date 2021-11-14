import React from 'react'
import styled from 'styled-components';
import {footerBackgroundColor} from "../../themes/colors";
import {ThemeInterface} from "../../themes/theme"

const DropDownCard = styled.div`
	overflow: hidden;
	padding: 10px 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	border: 1px ${({theme}) => theme.text} solid;
	background-color: ${({theme}) => theme.body};
`

export default DropDownCard;
