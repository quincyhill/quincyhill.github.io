// Theme Switcher
const theme_btn = document.getElementById('theme-switcher')
const sun_div = document.getElementById('sun-div')
const moon_div = document.getElementById('moon-div')

// Theme tokens
const light_theme = 'light-theme'
const dark_theme = 'dark-theme'
const theme_token = 'quincyhill.xyz:theme'
let g_current_theme = localStorage.getItem(theme_token)

function toggle_theme() {
	const current_theme = localStorage.getItem(theme_token)
	if (current_theme === light_theme) {
		localStorage.setItem(theme_token, dark_theme)
		document.body.className = dark_theme
		sun_div.setAttribute('hidden', 'true')
		moon_div.removeAttribute('hidden')
	} else if (current_theme === dark_theme) {
		localStorage.setItem(theme_token, light_theme)
		document.body.className = light_theme
		moon_div.setAttribute('hidden', 'true')
		sun_div.removeAttribute('hidden')
	} else {
		console.log('The theme choice is invalid!, defaulting to light theme ')
		localStorage.setItem(theme_token, light_theme)
		document.body.className = light_theme
		moon_div.setAttribute('hidden', 'true')
		sun_div.removeAttribute('hidden')
	}
}

class ToggleDropdown {
	constructor(button_name, item_name) {
		this.dropdown_btn = document.getElementById(button_name)
		this.dropdown_item = document.getElementById(item_name)
		this.is_open = false
	}

	toggle_item() {
		if (this.is_open) {
			this.dropdown_item.setAttribute('hidden', 'true')
			this.is_open = false
		} else if (!this.is_open) {
			this.dropdown_item.removeAttribute('hidden')
			this.dropdown_item.setAttribute('display', 'flex')
			this.is_open = true
		} else {
			console.log('value is neither true or false')
		}
	}

	change_button() {
		this.dropdown_btn.innerHTML = 'hi'
	}

	run_event() {
		this.dropdown_btn.addEventListener(
			'click',
			() => {
				this.toggle_item()
			},
			false
		)
	}
}

// Create objects for the dropdown toggle
let goals_dropdown = new ToggleDropdown('goals-btn', 'goals-item')
let education_dropdown = new ToggleDropdown('education-btn', 'education-item')
let projects_dropdown = new ToggleDropdown('projects-btn', 'projects-item')
let skills_dropdown = new ToggleDropdown('skills-btn', 'skills-item')
let contact_dropdown = new ToggleDropdown('contact-btn', 'contact-item')

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
	moon_div.setAttribute('hidden', 'true')
	sun_div.removeAttribute('hidden')
}

// Theme
theme_btn.addEventListener('click', toggle_theme, false)

// Run the events from the drop down objects
goals_dropdown.run_event()
education_dropdown.run_event()
projects_dropdown.run_event()
skills_dropdown.run_event()
contact_dropdown.run_event()
