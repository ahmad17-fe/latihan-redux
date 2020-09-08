import React from 'react'

const Filter = ({ filter, text, type }) => {
    return (
        <span onClick={() => filter(type)}> { text }</span>
    )
}

export default Filter
