import React from 'react'
import { Link } from 'react-router-dom'

import LogOut from '../components/LogOut'

import Column1Styled from '../components/styled-components/Column1Styled'
import Column4Styled from '../components/styled-components/Column4Styled'

export default function HomePage() {

	return (
		<>
			<Column1Styled>			
				<p>Home:</p>
				<nav>
					<Link to="/customers">
						<p>Customers</p>
					</Link>
				</nav>
			</Column1Styled>
			<Column4Styled>
				<LogOut/>
			</Column4Styled>
		</>
	)
}