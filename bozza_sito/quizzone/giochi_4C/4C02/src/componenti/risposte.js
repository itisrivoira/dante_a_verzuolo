import React from 'react'
import "./risposte.css"

const Risposte = (props) => {
    const check=(e)=>{
        let risp=document.querySelectorAll(".risposta")
        risp.forEach(r=>{
            r.style.backgroundColor="rgb(255,255,255,0.8)"
            r.style.color="black"
        })
        if(e.target.className==="risposta"){
            e.target.style.backgroundColor="#6d1212"
            e.target.style.color="white"
        }
        else{
            e.target.parentElement.style.backgroundColor="#6d1212"
            e.target.parentElement.style.color="white"
        }
    }
    return (
        <div className="risposte">
            <div className="risposta" tabIndex={0} onClick={check}>
                <span className="lettera">A</span>
                <div className="rispTesto">{props.risp[0]}</div>
            </div>
            <div className="risposta" tabIndex={0} onClick={check}>
                <span className="lettera">B</span>
                <div className="rispTesto">{props.risp[1]}</div>
            </div>
            <div className="risposta" tabIndex={0} onClick={check}>
                <span className="lettera">C</span>
                <div className="rispTesto">{props.risp[2]}</div>
            </div>
            <div className="risposta" tabIndex={0} onClick={check}>
                <span className="lettera">D</span>
                <div className="rispTesto">{props.risp[3]}</div>
            </div>        
        </div>
    )
}

export default Risposte
