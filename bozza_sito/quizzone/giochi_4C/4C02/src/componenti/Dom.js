import React from 'react'
import Testo from "./testo"
import "./dom.css"
import Risposte from "./risposte"

const Dom = (props) => {
    return (
        <div className="domanda">
            <Testo text={props.testoDomanda}/>
            <Risposte risp={[props.risp[0],props.risp[1],props.risp[2],props.risp[3]]}/>
        </div>
    )
}

export default Dom
