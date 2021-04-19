import { useEffect, useState } from 'react'
export const useDarkMode = () => {
	const [theme, setTheme] = useState('light')

	const setMode = (mode: string) => {
		window.localStorage.setItem('theme', mode)
		setTheme(mode)
	}

	const toggleTheme = () => {
		if (theme === 'light') {
			setMode('dark')
		} else {
			setMode('light')
		}
	}

	useEffect(() => {
		// btw localTheme should be string
		const localTheme: any = window.localStorage.getItem('theme')
		if (localTheme) {
			setTheme(localTheme)
		} else {
			setTheme('light')
			window.localStorage.setItem('theme', 'light')
		}
	}, [])
	return [theme, toggleTheme]
}
