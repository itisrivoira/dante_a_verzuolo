import React from 'react'
import "./risultati.css"

const Risultati = (props) => {
    return (
        <div className="risultati">
            <h1>Risultato finale</h1>
            <h2>{props.inf.numeroDomande} domande totali</h2>
            <h2>{props.inf.corrette} risposte corrette</h2>
            <h2>{props.inf.numeroDomande - parseInt(props.inf.corrette)} risposte sbagliate</h2>
            <a href="/modalita">Gioca ancora</a>
        </div>
    )
}

export default Risultati
