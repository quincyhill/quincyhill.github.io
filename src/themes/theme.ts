import {
	lightBody,
	lightText,
	lightGradient,
	darkBody,
	darkText,
	darkGradient,
	headerLightBackgrondColor,
	headerDarkBackgroundColor,
	moonBackgroundColor,
	sunBackgroundColor,
} from './colors'

export interface ThemeInterface {
	body: string
	navBody: string
	text: string
	gradient: string
	toggleColor: string
}

export const lightTheme: ThemeInterface = {
	body: lightBody,
	navBody: headerLightBackgrondColor,
	text: lightText,
	gradient: lightGradient,
	toggleColor: sunBackgroundColor,
}

export const darkTheme = {
	body: darkBody,
	navBody: headerDarkBackgroundColor,
	text: darkText,
	gradient: darkGradient,
	toggleColor: moonBackgroundColor,
}
