import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomersListLink({listData}) {
    return (
        <Link to={`/customers/${listData.id}`}>
            <p>{listData.name}</p>
        </Link>
    )
}
