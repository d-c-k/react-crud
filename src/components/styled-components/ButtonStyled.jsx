import styled from 'styled-components'

const ButtonStyled = styled.button`
	font-size: 0.9rem;
	color: white;
	background-color: black;
	border: none;
	padding: 0.3rem;
	max-width: 5rem;
	height: 2.2rem;
	cursor: pointer;

	&:hover{
		background-color: red;
	}
`

export default ButtonStyled