import React, { useContext }  from 'react';
import {Link} from 'react-router-dom'
import { infoContext } from './App';
import "./numDomande.css"

const Numdomande = () => {
    const infoStato = useContext(infoContext);
    const settaNum=(e)=>{
        infoStato.setinfo({...infoStato.info,numeroDomande:e.target.textContent})
        // console.log(infoStato)
    }
    return (
        <div className='numDomande'>
            <h1>Seleziona il numero di domande a cui vuoi rispondere:</h1>
            <div className='inputNum'>
                <Link to={"/quiz"} onClick={settaNum}>3</Link>
                <Link to={"/quiz"} onClick={settaNum}>5</Link>
                <Link to={"/quiz"} onClick={settaNum}>10</Link>
            </div>
        </div>
    );
}

export default Numdomande;
