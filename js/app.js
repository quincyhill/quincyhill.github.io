/* Theme switcher */
const theme_btn = document.getElementById('theme-switcher')
const sun_img = document.getElementById('sun-img')
const moon_img = document.getElementById('moon-img')

/* Buttons */
const goals_btn = document.getElementById('goals-btn')
const education_btn = document.getElementById('education-btn')
const projects_btn = document.getElementById('projects-btn')
const skills_btn = document.getElementById('skills-btn')

/* Items */
const goals_item = document.getElementById('goals-item')
const eduction_item = document.getElementById('education-item')
const projects_item = document.getElementById('projects-item')
const skills_item = document.getElementById('skills-item')

const light_theme = 'light-theme'
const dark_theme = 'dark-theme'
const theme_token = 'quincyhill.xyz:theme'

let goals_is_open = false
let education_is_open = false
let projects_is_open = false
let skills_is_open = false

function toggle_theme() {
	switch (localStorage.getItem(theme_token)) {
		case light_theme:
			/* switch to dark theme if its already light */
			localStorage.setItem(theme_token, dark_theme)
			document.body.className = dark_theme
			sun_img.setAttribute('hidden', 'true')
			moon_img.removeAttribute('hidden')
			break
		case dark_theme:
			/* switch to light theme if its already dark*/
			localStorage.setItem(theme_token, light_theme)
			document.body.className = light_theme
			moon_img.setAttribute('hidden', 'true')
			sun_img.removeAttribute('hidden')
			break
		default:
			/* In some strange event that the value is corrupted, log to output */
			console.log('The theme choice is invalid!')
			break
	}
}

function toggle_goals() {
	switch (goals_is_open) {
		case true:
			goals_is_open = false
			goals_item.setAttribute('hidden', 'true')
			break
		case false:
			goals_is_open = true
			goals_item.removeAttribute('hidden')
			goals_item.setAttribute('display', 'flex')
			break
	}
}

function toggle_education() {
	switch (education_is_open) {
		case true:
			education_is_open = false
			eduction_item.setAttribute('hidden', 'true')
			break
		case false:
			education_is_open = true
			eduction_item.removeAttribute('hidden')
			eduction_item.setAttribute('display', 'flex')
			break
	}
}

function toggle_projects() {
	switch (projects_is_open) {
		case true:
			projects_is_open = false
			projects_item.setAttribute('hidden', 'true')
			break
		case false:
			projects_is_open = true
			projects_item.removeAttribute('hidden')
			projects_item.setAttribute('display', 'flex')
			break
	}
}

function toggle_skills() {
	switch (skills_is_open) {
		case true:
			skills_is_open = false
			skills_item.setAttribute('hidden', 'true')
			break
		case false:
			skills_is_open = true
			skills_item.removeAttribute('hidden')
			skills_item.setAttribute('display', 'flex')
			break
	}
}

/* Makes an intial check to see if site theme token exists */
switch (localStorage.getItem(theme_token)) {
	case light_theme:
		document.body.className = light_theme
		moon_img.setAttribute('hidden', 'true')
		sun_img.removeAttribute('hidden')
		break
	case dark_theme:
		document.body.className = dark_theme
		sun_img.setAttribute('hidden', 'true')
		moon_img.removeAttribute('hidden')
		break
	default:
		/* generates default light theme token if none exist */
		localStorage.setItem(theme_token, light_theme)
		document.body.className = light_theme
		moon_img.setAttribute('hidden', 'true')
		sun_img.removeAttribute('hidden')
}

/* Theme */
theme_btn.addEventListener('click', toggle_theme, false)

/* Buttons*/
goals_btn.addEventListener('click', toggle_goals, false)
education_btn.addEventListener('click', toggle_education, false)
projects_btn.addEventListener('click', toggle_projects, false)
skills_btn.addEventListener('click', toggle_skills, false)
