import styled from 'styled-components'

const ValidatingInputStyled = styled.input`
    color:${props => props.valid === true ? "green" : "red"}
`

export default ValidatingInputStyled