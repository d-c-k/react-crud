import React from 'react'
import { useHistory } from 'react-router-dom'

import BlinkingTextStyled from '../components/styled-components/BlinkingTextStyled'
import ButtonStyled from '../components/styled-components/ButtonStyled'
import Column1Styled from '../components/styled-components/Column1Styled'

export default function ErrorPage() {
	const history = useHistory()

	function handleOnClick(){
			history.push("/")
	}
	return (
		<Column1Styled>
				<p>
					<BlinkingTextStyled>ERROR</BlinkingTextStyled>
				</p>
				<br/>
				<ButtonStyled onClick={handleOnClick}>Back</ButtonStyled>
		</Column1Styled>
	)
}
