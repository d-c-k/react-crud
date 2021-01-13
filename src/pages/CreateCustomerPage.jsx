import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import LogOut from '../components/LogOut'

import FormStyled from '../components/styled-components/FormStyled'
import Column1Styled from '../components/styled-components/Column1Styled'
import Column2Styled from '../components/styled-components/Column2Styled'
import Column4Styled from '../components/styled-components/Column4Styled'
import ButtonStyled from '../components/styled-components/ButtonStyled'

export default function CreateCustomerPage() {
	const [formData, setFormData] = useState({})

	function handleOnChange(e) {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	function renderInput(name, label, type) {
		return(
			<>
				<label>{label}:
				<input
						type = {type || "text"}
						name = {name}
						onChange = {handleOnChange}
				/>
				</label>
				<br/>
			</>
		)
	}

	return (
		<>
			<Column1Styled>
				<p><Link to="/home">Home</Link>/Add new customer:</p>
			</Column1Styled>
			<Column2Styled>
				<FormStyled>
					{renderInput("name", "Name")}
					{renderInput("organisationNr", "Org. Number")}
					{renderInput("vatNr", "VAT Number")}
					{renderInput("reference", "Reference")}
					{renderInput("paymentTerm", "Payment Term", "number")}
					{renderInput("website", "Website", "url")}
					{renderInput("email", "Email", "email")}
					{renderInput("phoneNumber", "Phone Number", "tel")}
					<ButtonStyled type="submit">Add</ButtonStyled>
				</FormStyled>
			</Column2Styled>   
			<Column4Styled>
				<LogOut />
			</Column4Styled>        
		</>
	)
}
