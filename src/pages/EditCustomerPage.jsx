import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import LogOut from '../components/LogOut'

import FormStyled from '../components/styled-components/FormStyled'
import Column1Styled from '../components/styled-components/Column1Styled'
import Column2Styled from '../components/styled-components/Column2Styled'
import Column4Styled from '../components/styled-components/Column4Styled'
import ButtonStyled from '../components/styled-components/ButtonStyled'

export default function EditCustomerPage(props) {
	const {customerData, setCustomerData} = useContext(UserContext)
	const customerId = Number(props.match.params.id)
	const currentIndex = customerData.map(item => item.id).indexOf(customerId)
  const history = useHistory()
    

	function handleOnChange(e) {
		let tempArr = [...customerData]
		let tempItem = {...tempArr[currentIndex], [e.target.name]: e.target.value}
		tempArr[currentIndex] = tempItem
		setCustomerData(tempArr)
	}

	function renderInput(name, label, type) {
		return(
			<>
				<label>{label}:
				<input
						type = {type || "text"}
                        name = {name}
                        value = {customerData[currentIndex][name] || ""}
						onChange = {handleOnChange}
				/>
				</label>
				<br/>
			</>
		)
	}

	function fetchData(){
		const url =  "https://frebi.willandskill.eu/api/v1/customers/"
		const token = localStorage.getItem("logInToken")
		fetch(url, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => setCustomerData(data.results))
	}

	function handleOnSubmit(e) {
		e.preventDefault()
		const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
		const token = localStorage.getItem("logInToken")
		fetch(url, {
			method: "PUT",
			body: JSON.stringify(customerData[currentIndex]),
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {			
			history.push(`/customers/${customerId}`)
			fetchData()
		})
	}

	return (
		<>
			<Column1Styled>
				<p><Link to="/home">Home</Link>/Edit {customerData[currentIndex].name}:</p>
			</Column1Styled>
			<Column2Styled>
				<FormStyled onSubmit={handleOnSubmit}>
					{renderInput("name", "Name")}
					{renderInput("organisationNr", "Org. Number")}
					{renderInput("vatNr", "VAT Number")}
					{renderInput("reference", "Reference")}
					{renderInput("paymentTerm", "Payment Term", "number")}
					{renderInput("website", "Website", "url")}
					{renderInput("email", "Email", "email")}
					{renderInput("phoneNumber", "Phone Number", "tel")}
					<ButtonStyled type="submit">Update</ButtonStyled>
				</FormStyled>
			</Column2Styled>   
			<Column4Styled>
				<LogOut />
			</Column4Styled>        
		</>
	)
}
