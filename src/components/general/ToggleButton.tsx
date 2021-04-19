import React from 'react'
import styled from 'styled-components'
import { ReactComponent as MoonIcon } from '../../assets/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'

interface ToggleButtonProps {
	theme: string | (() => void)
	toggleTheme: string | (() => void)
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
	width: 6rem;
	height: 4rem;

	svg {
		height: 1.5rem;
		width: 1.5rem;
	}
`

function ToggleButton({ theme, toggleTheme }: ToggleButtonProps) {
	const isLight: boolean = theme === 'light'

	// cast toggleTheme to only a function that returns void;
	const myToggleTheme = toggleTheme as () => void
	return (
		<ToggleContainer onClick={myToggleTheme}>
			{isLight && <SunIcon />}
			{!isLight && <MoonIcon />}
		</ToggleContainer>
	)
}

export default ToggleButton
