import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import LogOut from '../components/LogOut'

import Column1Styled from '../components/styled-components/Column1Styled'
import Column2Styled from '../components/styled-components/Column2Styled'
import Column4Styled from '../components/styled-components/Column4Styled'
import ButtonStyled from '../components/styled-components/ButtonStyled'
import TableStyled from '../components/styled-components/TableStyled'

export default function CustomerDetailPage(props) {
	const {customerData} = useContext(UserContext)
	const customerId = Number(props.match.params.id)
	const currentIndex = customerData.map(item => item.id).indexOf(customerId)

	console.log(currentIndex)

	return (
		<>
			<Column1Styled>
				<p><Link to="/home">Home</Link>/{customerData[currentIndex].name}:</p>
			</Column1Styled>
			<Column2Styled>
				<TableStyled>
					<tbody>
						<tr>
							<td>Org. number:</td>
							<td>{customerData[currentIndex].organisationNr}</td>
						</tr>

						<tr>
							<td>VAT Number:</td>
							<td>{customerData[currentIndex].vatNr}</td>
						</tr>
						
						<tr>
							<td>Reference:</td>
							<td>{customerData[currentIndex].reference}</td>
						</tr>

						<tr>
							<td>Payment Term:</td>
							<td>{customerData[currentIndex].paymentTerm}</td>
						</tr>

						<tr>
							<td>Website:</td>
							<td>
								<a href={customerData[currentIndex].website} target="_blank" rel="noreferrer">
									{customerData[currentIndex].website}
								</a>
							</td>
						</tr>

						<tr>
							<td>Email:</td>
							<td>
								<a href={`mailto:${customerData[currentIndex].email}`}>
									{customerData[currentIndex].email}
								</a>
							</td>
						</tr>

						<tr>
							<td>Phone Number:</td>
							<td>{customerData[currentIndex].phoneNumber}</td>
						</tr>
					</tbody>
				</TableStyled>
				<ButtonStyled type="button">Edit</ButtonStyled>
				<ButtonStyled type="button">Delete</ButtonStyled>
			</Column2Styled>
			<Column4Styled>
				<LogOut />
			</Column4Styled>
		</>
	)
}
