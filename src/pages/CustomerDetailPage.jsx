import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import LogOut from '../components/LogOut'

import Column1Styled from '../components/styled-components/Column1Styled'
import Column2Styled from '../components/styled-components/Column2Styled'
import Column4Styled from '../components/styled-components/Column4Styled'

export default function CustomerDetailPage(props) {
	const {customerData} = useContext(UserContext)
	const customerId = props.match.params.id
	console.log(customerData)
	let currentIndex = customerData.map(item => item.id).indexOf(`id: ${customerId}`)
	console.log(customerId)
	console.log(currentIndex)
	console.log(customerData.findIndex(i => i.id === customerId))
	console.log(customerData[1].id)

	return (
		<>
			<Column1Styled>
				<p><Link to="/home">Home</Link>/:</p>
			</Column1Styled>
			<Column2Styled>
			</Column2Styled>
			<Column4Styled>
				<LogOut />
			</Column4Styled>
		</>
	)
}
