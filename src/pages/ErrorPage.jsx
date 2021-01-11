import React from 'react'
import { Link } from 'react-router-dom'
import PageContainerStyled from '../components/styled-components/PageContainerStyled'

export default function ErrorPage() {
    return (
        <PageContainerStyled>
            <p>ERROR</p>
            <br/>
            <Link to="/">Go back</Link>
        </PageContainerStyled>
    )
}
