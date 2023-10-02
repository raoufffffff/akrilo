import { ClassNames } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Model = ({ data }) => {
    return (
        <Link
            to={`${data.id}`}
            className='article'
            data-for={data.for}
        >
            <img src={data.images[0]} />
            <h1>{data.titel}</h1>
            <h2>{data.prix} DA</h2>
            <h3>{data.state}, <span>{data.city}</span></h3>
        </Link>
    )
}

export default Model