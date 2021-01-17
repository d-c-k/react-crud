import React, { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import LogOut from '../components/LogOut'

import FormStyled from '../components/styled-components/FormStyled'
import Column1Styled from '../components/styled-components/Column1Styled'
import Column2Styled from '../components/styled-components/Column2Styled'
import Column4Styled from '../components/styled-components/Column4Styled'
import ButtonStyled from '../components/styled-components/ButtonStyled'
import ValidatingInputStyled from '../components/styled-components/ValidatingInputStyled'

export default function CreateCustomerPage() {
	const [formData, setFormData] = useState({})
  const [valid, setValid] = useState(false)
	const {setCustomerData} = useContext(UserContext)
  const history = useHistory()
  
  useEffect(() => {
    formData.vatNr && handleValidation()
  }, [formData.vatNr]) 

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
  
  function handleValidation(){
    let digits = RegExp(/[0-9]{10}/)	
    
		formData.vatNr.length === 12 && 
		formData.vatNr.charAt(0) === "S" &&
		formData.vatNr.charAt(1) === "E" && 
		digits.test(formData.vatNr) === true ? 
		setValid(true) : setValid(false)
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
    if(valid) {
      const url = "https://frebi.willandskill.eu/api/v1/customers/"
      const token = localStorage.getItem("logInToken")
      fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {			
        history.push("/home")
        fetchData()
		})} else {
      alert("Invalid input, the correct format is SE(10 digits)")
    }
	}
  
	return (
		<>
			<Column1Styled>
				<p><Link to="/home">Home</Link>/Add new customer:</p>
			</Column1Styled>
			<Column2Styled>
				<FormStyled onSubmit={handleOnSubmit}>
					{renderInput("name", "Name")}
					{renderInput("organisationNr", "Org. Number")}
					<label>VAT Number:
						<ValidatingInputStyled valid={valid} type="text" name="vatNr" onChange={handleOnChange} placeholder="Format: SE(10 digits)"/>
					</label>
					<br/>
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