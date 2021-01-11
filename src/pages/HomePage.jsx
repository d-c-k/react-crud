import React from 'react'
import { Link } from 'react-router-dom'
import PageContainerStyled from '../components/styled-components/PageContainerStyled'

export default function HomePage() {

	return (
		<PageContainerStyled>			
			<p>Home:</p>
			<nav>
				<Link to="/customers">
					<p>Customers</p>
				</Link>
			</nav>
		</PageContainerStyled>
	)
}
