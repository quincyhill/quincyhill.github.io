import { createGlobalStyle } from 'styled-components'
import { ThemeInterface } from './theme'

export const GlobalStyles = createGlobalStyle<{ theme: ThemeInterface }>`
	* {
		padding: 0;
		margin: 0;
		font-size: 1.25rem;
	}

	body {
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
	}

	a {
		color: ${({ theme }) => theme.text};
	}

	.toggle-div {
		padding: 1rem 0;
		display: grid;
		background-color: ${({ theme }) => theme.navBody};
	}

	nav {
		height: 12rem;
		text-align: center;
		text-decoration: none;
		background-image: ${({ theme }) => theme.gradient}
	}

	footer {
		padding-top: 4rem;
		text-align: center;
		min-height: 5rem;
	}

	.container {
		display: grid;
		max-width: 1000px;
		margin: 0 auto;
	}

	.showcase {
		padding: 2rem 0px;
	}
	

`
