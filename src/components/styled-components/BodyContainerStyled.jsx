import styled from 'styled-components'

const BodyContainerStyled = styled.div`
	display: grid;
	grid-template-columns: 5rem 1fr 1fr 1fr 1fr 5rem;
	grid-template-rows: 5rem 1fr;

	a{
		text-decoration: none;

		&:visited{
			color: black;
		}

		&:hover{
			color: red;
		}		
	}
`

export default BodyContainerStyled