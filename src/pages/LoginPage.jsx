import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import ButtonStyled from '../components/styled-components/ButtonStyled'
import FormStyled from '../components/styled-components/FormStyled'
import Column1Styled from '../components/styled-components/Column1Styled'

export default function LoginPage() {
	const {setUser, setCustomerData} = useContext(UserContext)
	const [logIn, setLogIn] = useState({
		user: "Daniel.Koefoed@yh.nackademin.se",
		password: ""
	})
	const history = useHistory()

	function handleOnChange(e){
		setLogIn({...logIn, [e.target.name]: e.target.value})
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

	function fetchUser(){
		const url =  "https://frebi.willandskill.eu/api/v1/me/"
		const token = localStorage.getItem("logInToken")
		fetch(url, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => setUser(data))
	}

	function handleOnSubmit(e){
		e.preventDefault()
		const url = "https://frebi.willandskill.eu/api-token-auth/"
		let path = "/home"
		const payload = {
			email: logIn.user,
			password: logIn.password
		}
		fetch(url, {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(res => res.ok ? res : false)
		.then(res => res ? res.json() : (path = "error"))
		.then(data => {
			localStorage.setItem("logInToken", data.token)
			history.push(path)	
			fetchData()	
			fetchUser()	
		})
		setUser(logIn.user)
	}

	return (
		<Column1Styled>
			<FormStyled onSubmit={handleOnSubmit}>
				<label>User:
					<input 
						name="user" 
						value={logIn.user} 
						onChange={handleOnChange} 
					/>
				</label>
				<br/>
				<label>Password:
					<input 
						name="password" 
						type="password"
						value={logIn.password} 
						onChange={handleOnChange} 
					/>
				</label>	
				<br/>
				<ButtonStyled type="submit">Log in</ButtonStyled>
			</FormStyled>
		</Column1Styled>
	)
}
