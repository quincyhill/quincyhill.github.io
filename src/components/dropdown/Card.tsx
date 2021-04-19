import React from 'react'
import styled from 'styled-components';
import {footerBackgroundColor} from "../../themes/colors";

const DropDownCard = styled.div`
	overflow: hidden;
	padding: 10px 10px;
	font-family: arial, sans-serif;
	box-shadow: 0 0 20px rgpa(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	background-color: ${footerBackgroundColor};
`

export default DropDownCard;
