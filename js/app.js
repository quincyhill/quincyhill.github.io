// Theme Switcher
const theme_btn = document.getElementById('theme-switcher')
const sun_div = document.getElementById('sun-div')
const moon_div = document.getElementById('moon-div')

// Theme tokens
const light_theme = 'light-theme'
const dark_theme = 'dark-theme'
const theme_token = 'quincyhill.xyz:theme'
let g_current_theme = localStorage.getItem(theme_token)

// Other Div
const main_div = document.getElementById('main-div')

// Colors
const light_color_lighter = getComputedStyle(
	document.documentElement
).getPropertyValue('--light-color-lighter')
const light_color_darker = getComputedStyle(
	document.documentElement
).getPropertyValue('--light-color-darker')
const dark_color_lighter = getComputedStyle(
	document.documentElement
).getPropertyValue('--dark-color-lighter')
const dark_color_darker = getComputedStyle(
	document.documentElement
).getPropertyValue('--dark-color-darker')

function toggle_theme() {
	if (g_current_theme === light_theme) {
		localStorage.setItem(theme_token, dark_theme)
		g_current_theme = dark_theme
		document.body.className = dark_theme
		sun_div.setAttribute('hidden', 'true')
		moon_div.removeAttribute('hidden')
	} else if (g_current_theme === dark_theme) {
		localStorage.setItem(theme_token, light_theme)
		g_current_theme = light_theme
		document.body.className = light_theme
		moon_div.setAttribute('hidden', 'true')
		sun_div.removeAttribute('hidden')
	} else {
		console.log('The theme choice is invalid!, defaulting to light theme ')
		localStorage.setItem(theme_token, light_theme)
		g_current_theme = light_theme
		document.body.className = light_theme
		moon_div.setAttribute('hidden', 'true')
		sun_div.removeAttribute('hidden')
	}
}

function gradient_move_mouse(ev, first_color, second_color) {
	let mouseXpercentage = Math.round((ev.pageX / window.innerWidth) * 100)
	let mouseYpercentage = Math.round((ev.pageY / window.innerHeight) * 100)
	let background_text = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, ${first_color}, ${second_color})`
	main_div.style.background = background_text
}

// Create objects for the dropdown toggle
const goals_dropdown = {
	dropdown_btn: document.getElementById('goals-btn'),
	dropdown_item: document.getElementById('goals-item'),
	is_open: false,
}

const education_dropdown = {
	dropdown_btn: document.getElementById('education-btn'),
	dropdown_item: document.getElementById('education-item'),
	is_open: false,
}

const projects_dropdown = {
	dropdown_btn: document.getElementById('projects-btn'),
	dropdown_item: document.getElementById('projects-item'),
	is_open: false,
}

const skills_dropdown = {
	dropdown_btn: document.getElementById('skills-btn'),
	dropdown_item: document.getElementById('skills-item'),
	is_open: false,
}

const contact_dropdown = {
	dropdown_btn: document.getElementById('contact-btn'),
	dropdown_item: document.getElementById('contact-item'),
	is_open: false,
}

const experience_dropdown = {
	dropdown_btn: document.getElementById('experience-btn'),
	dropdown_item: document.getElementById('experience-item'),
	is_open: false,
}

function toggle_dropdown(dropdown) {
	if (dropdown.is_open) {
		dropdown.dropdown_item.setAttribute('hidden', 'true')
		dropdown.dropdown_item.classList.remove('show-drop-down')
		dropdown.is_open = false
	} else if (!dropdown.is_open) {
		dropdown.dropdown_item.classList.add('show-drop-down')
		dropdown.dropdown_item.removeAttribute('hidden')
		dropdown.dropdown_item.setAttribute('display', 'flex')
		dropdown.is_open = true
	} else {
		console.log('error with dropdown is open value')
	}
}

function handle_dropdown(dropdown) {
	dropdown.dropdown_btn.addEventListener(
		'click',
		() => {
			toggle_dropdown(dropdown)
		},
		false
	)
}

// Makes an intial check to see if site theme token exists

if (g_current_theme === light_theme) {
	document.body.className = light_theme
	moon_div.setAttribute('hidden', 'true')
	sun_div.removeAttribute('hidden')
} else if (g_current_theme === dark_theme) {
	document.body.className = dark_theme
	sun_div.setAttribute('hidden', 'true')
	moon_div.removeAttribute('hidden')
} else {
	// Generates default light token
	localStorage.setItem(theme_token, light_theme)
	document.body.className = light_theme
	g_current_theme = light_theme
	moon_div.setAttribute('hidden', 'true')
	sun_div.removeAttribute('hidden')
}

// Dropdown handling
handle_dropdown(goals_dropdown)
handle_dropdown(education_dropdown)
handle_dropdown(projects_dropdown)
handle_dropdown(experience_dropdown)
handle_dropdown(skills_dropdown)
handle_dropdown(contact_dropdown)

experience_dropdown.dropdown_btn.addEventListener('click', () => {})

// Theme handling
theme_btn.addEventListener(
	'click',
	(ev) => {
		toggle_theme()
		if (g_current_theme === light_theme) {
			main_div.style.background = `radial-gradient(at center, ${light_color_lighter}, ${light_color_darker})`
		} else if (g_current_theme === dark_theme) {
			main_div.style.background = `radial-gradient(at center, ${dark_color_lighter}, ${dark_color_darker})`
		}
		console.log(g_current_theme)
	},
	false
)

// Radial background handling
main_div.addEventListener(
	'mousemove',
	(ev) => {
		if (g_current_theme === light_theme) {
			gradient_move_mouse(ev, light_color_lighter, light_color_darker)
		} else {
			gradient_move_mouse(ev, dark_color_lighter, dark_color_darker)
		}
	},
	false
)
