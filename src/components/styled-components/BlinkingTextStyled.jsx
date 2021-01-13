import styled, { keyframes } from 'styled-components'

const BlinkingTextStyled = styled.span`
    color: orangered;
    animation: 700ms ${keyframes({from: {opacity: 100}, to: {opacity: 0}})} infinite;
`

export default BlinkingTextStyled