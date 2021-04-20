import React from 'react'
import styled from 'styled-components'
import { ReactComponent as MoonIcon } from '../../assets/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'

interface ToggleButtonProps {
	theme: string
	toggleTheme: () => void
}

const ToggleContainer = styled.button`
	background: ${({ theme }) => theme.gradient};
	border: 2px solid ${({ theme }) => theme.toggleBorder};
	color: ${({ theme }) => theme.text};
	border-radius: 30px;
	cursor: pointer;
	display: flex;
	font-size: 0.5rem;
	justify-content: space-between;
	margin: 0 auto;
	overflow: hidden;
	padding: 0.5rem;
	position: relative;
	width: 5rem;
	height: 4rem;
	justify-content: center;

	svg {
		height: 2.5rem;
		width: 2.5rem;
	}
`

function ToggleButton({ theme, toggleTheme }: ToggleButtonProps) {
	const isLight: boolean = theme === 'light'
	return (
		<ToggleContainer onClick={toggleTheme}>
			{isLight && <SunIcon />}
			{!isLight && <MoonIcon />}
		</ToggleContainer>
	)
}

export default ToggleButton
