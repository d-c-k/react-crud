import React from 'react'
import { Link } from 'react-router-dom'
import PageContainerStyled from '../components/styled-components/PageContainerStyled'

export default function CustomersPage() {
	return (
		<PageContainerStyled>
			<p><Link to="/home">Home/</Link>Customers:</p>
			<br/>

		</PageContainerStyled>
	)
}
