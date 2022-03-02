import React,  { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Domanda from "./Domande/Domande.js"
import SceltaDomande  from './Domande/sceltaDomande/sceltaDomande.js';
import Home from './Home.js';
import ModalitaGioco from './Domande/sceltaDomande/modalitaGioco';

export const numberQuest=createContext()
const App = () => {
	const [gameInfo, setgameInfo] = useState({
		numeroDomande: 3,
		link: "https://raw.githubusercontent.com/itisrivoira/dante_a_verzuolo/main/domande_test.json"
	})
	return (
		<numberQuest.Provider value={{gameInfo,setgameInfo}}>
			<BrowserRouter>
				<div className='cont'>
					<Routes>
						<Route path="/domande" element={<Domanda/>}/>
						<Route path="/scelta" element={<SceltaDomande/>}/>
						<Route path="/modalita" element={<ModalitaGioco/>}/>
						<Route path="/" element={<Home/>}/>
					</Routes>
				</div>
			</BrowserRouter>
		</numberQuest.Provider>
	)
}

export default App