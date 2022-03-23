import React from 'react'
import Cookies from 'universal-cookie'


const cookies = new Cookies();

const Menu = () => {


const CerrarSesion = () => {
    cookies.remove('id', {path:"./"})
    cookies.remove('Username', {path:"./"})
    cookies.remove('Pass', {path:"./"})
    cookies.remove('Pass', {path:"./"})
    cookies.remove('RolId', {path:"./"})
        window.location.href='./'
}


  return (

    console.log(cookies.get('id'+cookies.get('id'))),
    console.log(cookies.get('Username'+cookies.get('Username'))),
    console.log(cookies.get('Pass'+cookies.get('Pass'))),
    console.log(cookies.get('Pass'+cookies.get('Creation_date'))),
    console.log(cookies.get('RolId'+cookies.get('RolId'))),



    <div>
        <h1>Estas Logeado</h1>
        <div>
           <button className='btn btn-primary' onClick={CerrarSesion}>Cerrar Sesion</button>
        </div>
    </div>
  )
}

export default Menu