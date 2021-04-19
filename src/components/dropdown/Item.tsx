import React, { useState, ReactNode } from 'react'
import { darkGrey, primaryColor, footerBackgroundColor } from '../../themes/colors'
import styled from 'styled-components'
import Button from "./Button"
import Card from "./Card"

interface ItemProps {
	title: string
	children: ReactNode
}
interface ContentsProps {
	children: ReactNode
}


// updated to use styled components instead of react bootstrap
function Content({children}: ContentsProps){
	return (
		<Card>
			{children}
		</Card>
	)
}

function Item({ title, children }: ItemProps) {
	let [isClicked, setIsClicked] = useState<boolean>(false)

	const handleClick = () => {
		setIsClicked(!isClicked)
	}

	return (
		<div className="text-light">
			<Button
				color={isClicked ? primaryColor : darkGrey}
				onClick={handleClick}
			>
				{title}
			</Button>
			<br />
			<br />
			{isClicked ? <Content children={children} /> : null}
		</div>
	)
}

export default Item
