import React from 'react'
import ThreeD from '../components/ThreeD'
import DropDownItem from '../components/DropDownItem'
import {
	primaryColor,
	backgroundColor1,
	backgroundColor2,
	footerBackgroundColor,
	darkGrey,
} from '../themes/colors'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import mainlogo from '../assets/mainlogo.svg'

function MainLogo() {
	let size: number = 50
	return <Image src={mainlogo} width={size} height={size} />
}

function Home() {
	return (
		<Container
			fluid
			className="p-0 text-center text-light"
			style={{
				overflowX: 'hidden',
				minHeight: '100vh',
				backgroundColor: footerBackgroundColor,
			}}
		>
			<Row
				style={{
					backgroundImage: `linear-gradient(to bottom, ${backgroundColor1} 0%, ${backgroundColor2} 100%)`,
				}}
			>
				<Col>
					<Jumbotron fluid style={{ backgroundColor: 'transparent' }}>
						<MainLogo />
						<h1>Quincy Hill</h1>
						<br />
						<h4>Engineer | Developer</h4>
						<br />
						<p>therealquincyhill@gmail.com</p>
						<p>224-256-0892</p>
						<p>
							<a
								style={{ color: primaryColor }}
								href="https://github.com/quincyhill"
							>
								Github
							</a>
						</p>
						<p>
							<a
								style={{ color: primaryColor }}
								href="https://www.linkedin.com/in/quincy-hill-4bb550176"
							>
								Linked In
							</a>
						</p>
					</Jumbotron>
				</Col>
			</Row>
			<Row style={{ backgroundColor: darkGrey }}>
				<Col>
					<Container>
						<br />
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
							<a
								style={{ color: primaryColor }}
								href="https://github.com/quincyhill/django_practice"
							>
								Backend Work
							</a>
						</DropDownItem>
						<br />
						<DropDownItem title="Skills">
							<h3>Proficient</h3>
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
							<h3>Understands</h3>
							<p>Java</p>
							<p>C#</p>
							<p>Lua</p>
						</DropDownItem>
					</Container>
					<br />
				</Col>
			</Row>
			<Row>
				<Col>
					<br />
					<p>Quincy Hill 2021</p>
				</Col>
			</Row>
		</Container>
	)
}

export default Home
