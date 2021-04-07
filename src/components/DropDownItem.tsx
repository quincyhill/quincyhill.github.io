import React, { useState, ReactNode } from 'react'
import { darkGrey, primaryColor, footerBackgroundColor } from '../themes/colors'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

interface DropDownItemProps {
	title: string
	children: ReactNode
}
interface DropDownContentProps {
	children: ReactNode
}

// Still need to work on this hover thing it annoys me
const StyledButton = styled.button`
	background: ${(props) =>
		props.color == primaryColor ? primaryColor : darkGrey};
	border-radius: 3px;
	border: 2px solid
		${(props) => (props.color == primaryColor ? darkGrey : primaryColor)};
	color: ${(props) => (props.color == primaryColor ? darkGrey : primaryColor)};
	margin: 0 1em;
	padding: 0.25em 1em;
`

function DropDownContent({ children }: DropDownContentProps) {
	return (
		<Card style={{ backgroundColor: footerBackgroundColor }}>
			<Card.Body style={{ backgroundColor: 'transparent' }}>
				{children}
			</Card.Body>
		</Card>
	)
}

function DropDownItem({ title, children }: DropDownItemProps) {
	let [isClicked, setIsClicked] = useState<boolean>(false)
	const handleClick = () => {
		setIsClicked(!isClicked)
		console.log('A button was clicked!')
	}
	return (
		<div className="text-light">
			<StyledButton
				color={isClicked ? primaryColor : darkGrey}
				onClick={handleClick}
			>
				{title}
			</StyledButton>
			<br />
			<br />
			{isClicked ? <DropDownContent children={children} /> : null}
		</div>
	)
}

export default DropDownItem
