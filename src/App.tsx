import React, { useState } from 'react'
import BaseRouter from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './customHooks/useDarkMode'
import { lightTheme, darkTheme } from './themes/theme'
import { GlobalStyles } from './themes/global'
import ToggleButton from './components/general/ToggleButton'

function App() {
	// I can bring this any where
	const [theme, toggleTheme] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<div className="toggle-div">
				<ToggleButton theme={theme} toggleTheme={toggleTheme} />
			</div>
			<BrowserRouter>
				<BaseRouter />
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
