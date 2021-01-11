import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ButtonStyled from '../components/styled-components/ButtonStyled'
import FormStyled from '../components/styled-components/FormStyled'
import PageContainerStyled from '../components/styled-components/PageContainerStyled'

export default function LoginPage() {
	const [logIn, setLogIn] = useState({
		user: "webb19@willandskill.se",
		password: "javascriptoramverk"
	})
	const history = useHistory()

	function handleOnChange(e){
		setLogIn({...logIn, [e.target.name]: e.target.value})
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
		})
	}

	return (
		<PageContainerStyled>
			<p>Login</p>
			<br/>
			<FormStyled onSubmit={handleOnSubmit}>
				<label>User:</label>
					<input name="user" value={logIn.user} onChange={handleOnChange}></input>
				
				<br/>
				<label>Password:</label>
					<input name="password" value={logIn.password} onChange={handleOnChange}></input>
				
				<br/>
				<br/>
				<ButtonStyled type="submit">Enter</ButtonStyled>
			</FormStyled>
		</PageContainerStyled>
	)
}
