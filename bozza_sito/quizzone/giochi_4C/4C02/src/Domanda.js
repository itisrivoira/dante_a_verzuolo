import React, { useEffect, useState, useContext } from 'react';
import "./domanda.css"
import Dom from "./componenti/Dom"
import Pulsanti from "./componenti/pulsanti"
import Risultati from "./componenti/risultati"
import {infoContext} from "./App"

const Domanda = () => {
	const infoStato = useContext(infoContext);
	const [nDom,setNdom]=useState(0)    //salva il numero della domanda
	const [domande, setDomande] = useState([])  //vettore di domande
	const [punti, setPunti] = useState(0)   //salva i punti
	useEffect(() => {
		setDomande([])
		caricaDomanda()
		setDomande([])
	},[]);
	const caricaDomanda=()=>{
		//predisposizione a comunicazione con server
		// fetch(infoStato.info.linkServer,{
		//     method:"post",
		//     headers:{'Content-type':'application/json'},
		//     body:JSON.stringify({
		//         numDomande:infoStato.info.numDomande
		//     })
		// })
		// .then(response=>response.json())
		// .then(controllo=>{

		// })

		fetch(infoStato.info.linkServer)
		.then(response => response.json())
		.then(data => {
			data.forEach(dom => {
				setDomande(domande=>[...domande,<Dom testoDomanda={dom.testo} key={dom.corretta} risp={[dom.A,dom.B,dom.C,dom.D]}/>])
			})
		})
	}
	const conferma=()=>{
		let cont=0  //conto per verificare se c'è effettivamente  qualcosa di selezionato
		let risp=document.querySelectorAll(".risposta")
		for (let i = 0; i < risp.length; i++) {
			let stile=(window.getComputedStyle(risp[i]))   //uso lo stile per capire se una risposta è selezionata (in base al colore di sfondo)
			if(stile.backgroundColor==="rgb(109, 18, 18)"){
				if(risp[i].children[0].textContent===domande[nDom].key){   //verifico la correttezza della domanda tra lettera della risposta selezionata e lettera della risposta corretta
					setPunti(punti=>punti+1)
				}
				//verifico se la modalita selezionata è quella per ogni domanda, in caso accendo la luce dopo la risposta
				if(infoStato.info.modalita==="ogni-domanda"){
					accendiLuci()
				}
				if(nDom===infoStato.info.numeroDomande-1){
					// Domande finite
					//controllo la correttezza dell'ultima domanda
					if(risp[i].children[0].textContent===domande[nDom].key){
						infoStato.setinfo({...infoStato.info,corrette:punti+1})
					}else{
						infoStato.setinfo({...infoStato.info,corrette:punti})
					}
					if(infoStato.info.modalita==="fine-quiz"){
						//accendo i led se l'utente ha selezionato l'opzione di accensione a fine quiz
						accendiLuci()
					}
					document.querySelector(".risultati").style.display="flex"
				}else{
					setNdom(nDom+1)
				}
				risp[i].style.backgroundColor="rgb(255, 255, 255, 0.8)"
				risp[i].style.color="black"
				//ritorno al colore normale
				cont=cont+1;
			}
		}
		if(cont===0){
			alert("Non hai selezionato nessuna risposta")
		}
	}
	const accendiLuci=()=>{
		//predisposizione a comunicazione con server
		// fetch(infoStato.info.linkServer,{
		//     method:"post",
		//     headers:{'Content-type':'application/json'},
		//     body:JSON.stringify({
		//         parametro:""
		//     })
		// })
		// .then(response=>response.json())
		// .then(controllo=>{

		// })
	}
	return (
		<div className='domanda' onLoad={caricaDomanda}>
			<div className='navInfo'>
				<div>
					Domanda n. {nDom+1}/{infoStato.info.numeroDomande}
				</div>
				<div>
					Punti: <span id="pt">{punti}</span>/{infoStato.info.numeroDomande}
				</div>
			</div>
			<Risultati inf={infoStato.info}/>
			{domande[nDom]}
			<Pulsanti conferma={conferma}/>
		</div>
	);
}

export default Domanda;
