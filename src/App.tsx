import React, { useState } from 'react'
import BaseRouter from './routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './customHooks/useDarkMode'
import { lightTheme, darkTheme } from './themes/theme'
import { GlobalStyles } from './themes/global'
import ToggleButton from './components/general/ToggleButton'

// These are the default router functions
// <BrowserRouter>
//		<BaseRouter />
// 	</BrowserRouter>

// <ToggleButton theme={theme} toggleTheme={toggleTheme}/>
// <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>

function App() {
	// I can bring this any where
	const [theme, toggleTheme] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	return (
		<ThemeProvider theme={themeMode}>
			<React.Fragment>
				<GlobalStyles /> 
				<div className="toggle-button">
					<ToggleButton theme={theme} toggleTheme={toggleTheme} />
				</div>
				<div className="main-router">
					<BrowserRouter>
						<BaseRouter />
					</BrowserRouter>
				</div>
			</React.Fragment>
		</ThemeProvider>
	)
	// return (
	// 	<ThemeProvider theme={themeMode}>
	// 		<React.Fragment>
	// 			<GlobalStyles/>
	// 			<div>
	// 				<h1>Hello there</h1>
	// 				<div style={{ backgroundColor: 'red' }}>
	// 					<p>stuffs</p>
	// 				</div>
	// 			</div>
	// 		</React.Fragment>
	// 	</ThemeProvider>
	// )
}

export default App
