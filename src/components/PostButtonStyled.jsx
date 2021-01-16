import styled from 'styled-components'
import ButtonStyled from './styled-components/ButtonStyled'

const PostButtonStyled = styled(ButtonStyled)`
    disabled: ${props => props === true ? "true" : "false"}
`

export default PostButtonStyled