import React, { useContext, useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import LogOut from '../components/LogOut'

import Column1Styled from '../components/styled-components/Column1Styled'
import Column2Styled from '../components/styled-components/Column2Styled'
import Column4Styled from '../components/styled-components/Column4Styled'
import CustomersListLink from '../components/CustomersListLink'

export default function HomePage() {
	//const [loading, setLoading] = useState(true)
	const {customerData} = useContext(UserContext)

	// useEffect(() => {
	// 	setTimeout(() => setLoading(false), 500)
	// }, [])

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
				{customerData 
				?
				customerData.map(item => {
					return <CustomersListLink key={item.id} listData={item}/>
				})
				:
				<p>No data</p>			
				}
			</Column2Styled>
			<Column4Styled>
				<LogOut/>
			</Column4Styled>
		</>
	)
}