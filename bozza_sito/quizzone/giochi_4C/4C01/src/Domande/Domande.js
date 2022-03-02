import React, { useEffect, useState, useContext} from 'react'
import {numberQuest} from "../App"
import './Domande.css'

const Domande = () => {
	
	const info = useContext(numberQuest);
	const [domanda, setdomanda] = useState([])
	const [ris1, setris1] = useState([])
	const [ris2, setris2] = useState([])
	const [ris3, setris3] = useState([])
	const [ris4, setris4] = useState([])
	const [indice, setindice] = useState(0)
	const [corretta, setcorretta] = useState([])
	const [button, setbutton] = useState("Prossima domanda")
	const [punteggio, setpunteggio] = useState(0)
	const [messaggioFinale, setmessaggioFinale] = useState("")


	useEffect(() => {
		setdomanda([])
		Scarica_domande()
		setindice(0)
		setdomanda([])
		//eslint-disable-next-line
	}, []);
	
	const Scarica_domande = () =>{
		fetch(info.gameInfo.link)
		.then(response => response.json())
		.then(data => {
			data.forEach(elemento => {
				setdomanda(domanda=>[...domanda, elemento.testo])
				setris1(ris1=>[...ris1, elemento.A])
				setris2(ris2=>[...ris2, elemento.B])
				setris3(ris3=>[...ris3, elemento.C])
				setris4(ris4=>[...ris4, elemento.D])
				setcorretta(corretta=>[...corretta, elemento.corretta])
			});
		})
	}

	const next = () =>{
		if(indice<info.gameInfo.numeroDomande-1){
			setindice(indice+1)
		}else if(indice===info.gameInfo.numeroDomande-1){
			if(button==="MOSTRA RISULTATO"){
				setmessaggioFinale(
					<div id="risFinale">
						<div>RISULTATO FINALE</div>
						<div>Domande: {indice+1}</div>
						<div> Risposte esatte: <span id='punt'>{punteggio}</span></div>
						<div>Risposte errate: <span id='erra'>{indice+1-punteggio}</span></div>
						<a href="/">Rigioca</a>
					</div>
				)
			}else
			setbutton("MOSTRA RISULTATO")
		}

		let risp = document.querySelector('input[name="Risposta"]:checked').value;
		if(risp === corretta[indice]){
			setpunteggio(punteggio+1)
		}
	}
	const colore=(event)=>{
		let el=event.target
		document.querySelectorAll(".risposte").forEach(elem=>{
			elem.style.backgroundColor = "#ec2929"
		})
		if(el.children.length>0){
			event.target.children[1].checked = true
		}else{
			event.target.parentElement.children[1].checked = true
			event.target.parentElement.style.backgroundColor = "black"
		}
		document.querySelector('input[name="Risposta"]:checked').parentElement.style.backgroundColor = "black"
	}
	return (
			<div id='contenitore'>
				<div className="dom">{domanda[indice]}</div>
				<div className="risp">
					<div className='risposte' onClick={colore}>
						<span  className="spanRisp" >{ris1[indice]}</span>
						<input type="radio" checked name='Risposta' value='A'/>
					</div>
					<div className='risposte'  onClick={colore}>
						<span className="spanRisp">{ris2[indice]}</span>
						<input type="radio" name='Risposta' value='B'/>
					</div>
					<div className='risposte'  onClick={colore}>
						<span className="spanRisp">{ris3[indice]}</span>
						<input type="radio" name='Risposta' value='C'/>
					</div>
					<div className='risposte'  onClick={colore} >
						<span className="spanRisp">{ris4[indice]}</span>
						<input type="radio" name='Risposta' value='D'/>
					</div>
				</div>
				<div>
					<input id="btn_domande" type="button" value={button} onClick={next}/>
				</div>
				{messaggioFinale}
			</div>
	)
}

export default Domande