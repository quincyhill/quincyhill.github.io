import React from 'react'
import styled from 'styled-components'
import { ReactComponent as MoonIcon } from '../../assets/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'

interface ToggleButtonProps {
	theme: string
	toggleTheme: () => void
}

const ToggleContainer = styled.button`
	background: ${({ theme }) => theme.toggleColor};
	border: 2px solid ${({ theme }) => theme.toggleColor};
	box-shadow: 0 0 5px ${({theme}) => theme.toggleColor}, 0 0px 10px rgba(0, 0, 0, 0.4);
	color: ${({ theme }) => theme.text};
	border-radius: 20px;
	cursor: pointer;
	margin: 0 auto;
	width: 4rem;
	height: 3rem;

	svg {
		height: 1.5rem;
		width: 1.5rem;
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
