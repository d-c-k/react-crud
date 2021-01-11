import React from 'react'
import { Link } from 'react-router-dom'
import LogOut from '../components/LogOut'
import Column1Styled from '../components/styled-components/Column1Styled'
import Column4Styled from '../components/styled-components/Column4Styled'

export default function CustomersPage() {
	return (
		<>
		<Column1Styled>
			<p><Link to="/home">Home/</Link>Customers:</p>
			<br/>

		</Column1Styled>
		<Column4Styled>
			<LogOut />
		</Column4Styled>
		</>
	)
}
