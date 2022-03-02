import React from 'react';
import {Link} from 'react-router-dom'
import "./home.css"

const Home = () => {

    return (
        <div className='home'>
            <h4>Preparati!</h4>
            <p>
                Stai per affrontare un difficilissimo quiz su Dante e sulle suo opere più famose
            </p>
            <p>
                Sfida i tuoi amici a chi fa più punti, sicuramente vincerai tu!
            </p>
            <div>
                Quiz su Dante
            </div>
            <Link to={"/modalita"}>Gioca</Link>
        </div>
    );
}

export default Home;
