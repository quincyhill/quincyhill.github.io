import { useEffect, useState } from 'react'
export const useDarkMode = (): [string, () => void] => {
	const [theme, setTheme] = useState<string>('light')

	const setMode = (mode: string): void => {
		window.localStorage.setItem('theme', mode)
		setTheme(mode)
	}

	const toggleTheme = (): void => {
		if (theme === 'light') {
			setMode('dark')
		} else {
			setMode('light')
		}
	}

	useEffect(() => {
		let localTheme: string
		if (window.localStorage.getItem('theme') == null) {
			console.log('There is no theme listed')
		} else {
			// using as string because i've checked to make sure its NOT null even tho tsc throws some error
			localTheme = window.localStorage.getItem('theme') as string
			if (localTheme) {
				setTheme(localTheme)
			} else {
				setTheme('light')
				window.localStorage.setItem('theme', 'light')
			}
		}
	}, [])
	return [theme, toggleTheme]
}
