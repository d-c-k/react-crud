import styled from 'styled-components'
import Column1Styled from './Column1Styled'

const Column4Styled = styled(Column1Styled)`
    grid-column: 5;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    // button{
    //     float:right;
    // }

    // p{
    //     float: right;
    // }
`

export default Column4Styled