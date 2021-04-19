import { createGlobalStyle } from 'styled-components'
import { ThemeInterface } from './theme'

export const GlobalStyles = createGlobalStyle<{ theme: ThemeInterface }>`
	*,
	*::after,
	*::before{
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		align-items: center;
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-family: Roboto, Helvetica, Arial, sans-sarif;
		transition: all linear;
	}

	a {
		color: ${({ theme }) => theme.text};
	}

	.navbar {
		background-color: ${({ theme }) => theme.navBody}
	}
`
