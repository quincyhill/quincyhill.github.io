import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'
import Button from '../components/dropdown/Button'
import Card from '../components/dropdown/Card'
import { useDarkMode } from '../customHooks/useDarkMode'
import { lightTheme, darkTheme } from '../themes/theme'
import ToggleButton from '../components/general/ToggleButton'
import DropDownItem from '../components/dropdown/Item'

function Home() {
	// Figure out hooks and other global stuff
	const [theme, toggleTheme] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	return (
		<React.Fragment>
			<Navbar />
			<section className="container showcase">
				<DropDownItem title="Goals">
					<p>
						Develop and Design the<strong> next generation </strong> of
						technical solutions with an emphasis on
						<strong> data driven </strong>research and insight
					</p>
				</DropDownItem>
				<br />
				<DropDownItem title="Education">
					<p>
						<span>Associates in Engineering Sciences</span> College of Lake
						County
					</p>
					<p>Engineering Transfer Undergraduate, College of Lake County</p>
				</DropDownItem>
				<br />
				<DropDownItem title="Projects | Experience">
					<h3>Personal Projects: </h3>
					<a href="https://github.com/quincyhill/django_practice">
						Backend Work
					</a>
				</DropDownItem>
				<br />
				<DropDownItem title="Skills">
					<strong>Proficient</strong>
					<p>
						React JS <strong>(Javascript / Typescript Framework)</strong>
					</p>
					<p>React Native</p>
					<p>Typescript</p>
					<p>Javascript</p>
					<p>Python 3</p>
					<p>
						Django <strong>(Python3 Web Framework)</strong>
					</p>
					<p>Git</p>
					<p>HTML</p>
					<p>CSS</p>
					<p>Linux</p>
					<strong>Understands</strong>
					<p>Java</p>
					<p>C#</p>
					<p>Lua</p>
				</DropDownItem>
			</section>
			<Footer />
		</React.Fragment>
	)
}

export default Home
