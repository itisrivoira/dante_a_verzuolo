import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from "./componenti/Navbar"
import Home from "./Home"
import Modalita from "./Modalita"
import Numerodomande from "./numDomande"
import Domanda from "./Domanda"

export const infoContext=createContext()

function App() {
  const [info, setinfo] = useState({
    linkServer:"https://raw.githubusercontent.com/itisrivoira/dante_a_verzuolo/main/domande_test.json",
    modalita:"",
    numeroDomande:3,
    corrette:0
  });

  return (
    <infoContext.Provider value={{info,setinfo}}>
      <div>
        <Navbar/>
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="modalita" element={<Modalita/>}/>
                    <Route path="numero-domande" element={<Numerodomande/>}/>
                    <Route path="quiz" element={<Domanda/>}/>
                </Routes>
            </div>
        </BrowserRouter>
      </div>
    </infoContext.Provider>
  );
}

export default App;
