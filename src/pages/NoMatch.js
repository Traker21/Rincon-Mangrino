import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Visual.css';


const NoMatch = () => {

const VolverAinicio = () => {
    window.location.href='/'
}    

  return (
    <div className="boxy">
        <h1>Bajaste Mangrino </h1>
        <h2>No encontramos Nada aqui</h2>
        <br/>
        <button onClick={(VolverAinicio)} className='btn btn-primary'>Volver al Inicio</button>
        <br/>
        <br/>
        <img src='https://c.tenor.com/xcPbGsVA57wAAAAC/boxy-boxy-fresh.gif'/>
    </div>

  )
}

export default NoMatch