import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'

function BaseRouter() {
	return (
		<React.Fragment>
			<Route path="/" component={Home} />
		</React.Fragment>
	)
}

export default BaseRouter
