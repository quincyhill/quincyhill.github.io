import React, { useState, ReactNode } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Card from './Card'

interface ItemProps {
	title: string
	children: ReactNode
}

const DropDownContainer = styled.div`
	display: grid;
	justify-items: center;
	text-align: center;
	padding: 0 40px;
	.test-btn {
		font-size: 20px;
	}
`

function Item({ title, children }: ItemProps) {
	let [isClicked, setIsClicked] = useState<boolean>(false)

	const handleClick = () => {
		setIsClicked(!isClicked)
	}

	return (
		<DropDownContainer>
			<Button className="test-btn" onClick={handleClick}>{title}</Button>
			<br />
			{isClicked ? <Card>{children}</Card>: null}
		</DropDownContainer>
	)
}

export default Item
