import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {numberQuest} from "../../App"
import './sceltaDomande.css'

const SceltaDomande = () => {
	const info = useContext(numberQuest);

  const impostaDomande = (event) =>{
    let n=parseInt(event.target.title)
    info.setgameInfo({...info.gameInfo,numeroDomande:n})
    console.log(info.gameInfo.numeroDomande)
  }
  
  return (
    <div id='contScelta'>
        <div className='title'>SCEGLI IL NUMERO DI DOMANDE CON CUI VUOI GIOCARE!</div>
        <Link className='scelta' to={"/domande"} title="3" onClick={impostaDomande}>3 DOMANDE</Link>
        <Link className='scelta' to={"/domande"} title="5" onClick={impostaDomande}>5 DOMANDE</Link>
        <Link className='scelta' to={"/domande"} title="10"onClick={impostaDomande}>10 DOMANDE</Link>
    </div>
  )
}

export default SceltaDomande
