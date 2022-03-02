import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import "./modalita.css"
import Splashscreen from './componenti/Splashscreen';
import {infoContext} from "./App"


const Modalita = () => {
    const infoStato = useContext(infoContext);
    const quiz=(modalita)=>{
        infoStato.setinfo({...infoStato.info,modalita})
        // console.log(infoStato)
    }
    const splash=()=>{
        setTimeout(() => {
            document.getElementById("splashscreen").style.display="none"
          }, 1000);
    }
    return (
        <div className='gioca' onLoad={splash}>
            <Splashscreen/>
            <div className='modalita'>
                <h1>Scegli la modalità di gioco</h1>
                <div className='buttons'>
                    <Link to={"/numero-domande"} onClick={()=>quiz("ogni-domanda")}>Accensione ad ogni domanda</Link>
                    <Link to={"/numero-domande"} onClick={()=>quiz("fine-quiz")}>Accensione solo alla fine</Link>
                </div>
                <div className='labels'>
                    <label>Le luci si accenderanno per ogni domanda, in base alla risposta</label>
                    <label>Le luci si accenderanno solo alla fine, in base alla percentuale di risposte corrette</label>
                </div>
            </div>
        </div>
    );
}

export default Modalita;
