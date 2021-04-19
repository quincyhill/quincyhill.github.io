import {
	lightBody,
	lightText,
	lightToggleBorder,
	lightGradient,
	darkBody,
	darkText,
	darkToggleBorder,
	darkGradient,
	backgroundColor1,
	backgroundColor2,
} from './colors'

export interface ThemeInterface {
	body: string
	navBody: string
	text: string
	toggleBorder: string
	gradient: string
}

export const lightTheme: ThemeInterface = {
	body: lightBody,
	navBody: backgroundColor2,
	text: lightText,
	toggleBorder: lightToggleBorder,
	gradient: lightGradient,
}

export const darkTheme = {
	body: darkBody,
	navBody: backgroundColor1,
	text: darkText,
	toggleBorder: darkToggleBorder,
	gradient: darkGradient,
}
