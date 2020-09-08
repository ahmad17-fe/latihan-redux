import React from 'react'
import Filter from './Filter'

const Footer = ({ filter }) => {
    const link = [
        {text: "All", type: "ALL"},
        {text: "Completed", type: "COMPLETED"},
        {text: "Active", type: "ACTIVE"}
    ]

    return (
        <div>
            <span>Filter: </span>
            {
                link.map((link, index) => {
                    return <Filter key={index} {...link} filter= {filter}/>
                })
            }
        </div>
    )
}

export default Footer
