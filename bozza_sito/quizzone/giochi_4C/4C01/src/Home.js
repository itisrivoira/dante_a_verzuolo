import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
		<div className='container'>
			<div className='titoloHome'>BENVENUTO AL QUIZ SU DANTE ALIGHIERI!</div>
			<Link className='inizio' to={"/modalita"}>INIZIA IL QUIZ!</Link>
		</div>
    )
}

export default Home