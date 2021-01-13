import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import ButtonStyled from '../components/styled-components/ButtonStyled'


export default function LogOut() {
	const history = useHistory()
	const {user} = useContext(UserContext)

	function handleOnClick(){
		localStorage.removeItem("logInToken")
		history.push("/")
	}

	return (
		<>			
			<p>User ID: {user.id}</p>
			<p>{user.firstName} {user.lastName}</p>
			<p>{user.email}</p>
			<br/>
			<ButtonStyled type="button" onClick={handleOnClick}>Log out</ButtonStyled>
		</>
	)
}
