import React from 'react'
import "./pulsanti.css"

const Pulsanti = (props) => {
    return (
        <div className="pulsanti">
            <input type="button" value="CONFERMA" onClick={props.conferma}/>
        </div>
    )
}

export default Pulsanti
