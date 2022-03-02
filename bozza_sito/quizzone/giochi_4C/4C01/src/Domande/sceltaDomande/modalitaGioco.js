import React, { useEffect } from 'react'
import './modalitaGioco.css'
import {Link} from 'react-router-dom'
import SplashScreen from './splashScreen'

const ModalitaGioco = () => {
  const splashScreen=()=>{
    setTimeout(() => {
    document.getElementById("container").style.display = "none"
    }, 3000);
  }
  
  useEffect(() => {
  splashScreen()
  }, [])

  return (
    <div id='contScelta'>
		<SplashScreen/>
        <div className='title'>SCEGLI LA MODALITÁ DI GIOCO</div>
        <Link className='scelta' to={"/scelta"}>OGNI DOMANDA</Link>
        <div className='desc'>Si accenderanno le luci, per ogni domanda, in base alla risposta</div>
        <Link className='scelta' to={"/scelta"}>SOLO ALLA FINE</Link>
        <div className='desc'>Si accenderanno le luci, solo alla fine di tutte le domande, in base alla percentuale di risposte corrette</div>
    </div>
  )
}

export default ModalitaGioco