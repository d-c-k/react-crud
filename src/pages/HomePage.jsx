import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import LogOut from '../components/LogOut'

import Column1Styled from '../components/styled-components/Column1Styled'
import Column4Styled from '../components/styled-components/Column4Styled'

export default function HomePage() {
	useEffect(() => {
		fetchData()
	}, [])

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
		.then(data => console.log(data.results))
	}

	return (
		<>
			<Column1Styled>			
				<p>Home:</p>
				<nav>
					<Link to="/customers">
						<p>List of customers</p>
					</Link>
					<Link to="/addcustomers">
						<p>Add new customer</p>
					</Link>
				</nav>
			</Column1Styled>
			<Column4Styled>
				<LogOut/>
			</Column4Styled>
		</>
	)
}