import React from 'react'
import "./testo.css"

const Testo = (props) => {
    return (
        <div className="testoDiv">
            <span>{props.text}</span>
        </div>
    )
}

export default Testo
