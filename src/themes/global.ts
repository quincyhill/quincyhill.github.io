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
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
		transition: all linear;
	}

	a {
		color: ${({ theme }) => theme.text};
	}

	.navbar {
		background-color: ${({ theme }) => theme.navBody}
	}

	img {
		width: 100%;
	}

	.navbar {
		height: 70px;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.navbar .container {
		overflow: auto;
		padding: 0 40px;
	}

	.navbar .flex {
		justify-content: space-between;
	}

	.navbar ul {
		display: flex;
	}
	
	.navbar a {
		color: ${(props) => props.theme.text};
		padding: 10px;
		margin: 0 5px;
	}

	.navbar a:hover {
		border-bottom: 2px ${({ theme }) => theme.text} solid;
	}

	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
`
