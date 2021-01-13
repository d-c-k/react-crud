import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import LogOut from '../components/LogOut'

import Column1Styled from '../components/styled-components/Column1Styled'
import Column2Styled from '../components/styled-components/Column2Styled'
import Column4Styled from '../components/styled-components/Column4Styled'
import CustomersListLink from '../components/CustomersListLink'

export default function HomePage() {
	const {customerData} = useContext(UserContext)

	return (
		<>
			<Column1Styled>			
				<p>Home:</p>
				<nav>
					<Link to="/addcustomers">
						<p>Add new customer</p>
					</Link>
				</nav>
			</Column1Styled>
			<Column2Styled>
				{customerData.length > 0 
				?
				customerData.map(item => {
					return <CustomersListLink key={item.id} listData={item}/>
				})
				:
				<p>Loading . . . </p>}				
			</Column2Styled>
			<Column4Styled>
				<LogOut/>
			</Column4Styled>
		</>
	)
}