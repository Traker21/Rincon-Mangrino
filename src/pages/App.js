import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import '../css/Visual.css';
import 'bootstrap/dist/css/bootstrap.css';



const baseUrl="https://localhost:44324/user/login"


const Login = () => {

const form = {
    username: '',
    pass: ''
}

const { register, handleSubmit} = useForm (form)




  const iniciarSesion = async (data) => {
  await axios.post(baseUrl,data)

  .then(response => {
  
    console.log(response.data)
      if(response.data.isLoged){
        alert('bienvenido')
        
    }

      
        alert('Usuario o contraseña no validos')
      
  })

  
  }

  const Registrarse = () => {
    alert('Esta funcion tadavia no esta inplementada')
  }



  return (
    <div >
      
      <br/>

      <div class="w-100 p-3">
               <img src='https://sonidomusicalrddotcom.files.wordpress.com/2009/11/money.jpg'/>
      </div>
      <div className="containerPrincipal">
        <div className="containerSecundario">    
          <div className='form-group'>
            <h1>🐒</h1>
            <h1>Rincon Mangrino</h1>
            <form onSubmit={handleSubmit(iniciarSesion)}>

              <h2>🧔</h2>
              <label>Usuario</label>
              <br/>
                <input 
                type="text"
                className='form-control'
                placeholder='🍌 nombre'
                {...register("username")}/>



                <br/>
                <h2>🔐</h2>
               <label>Contraseña</label>
               <br/>
                <input 
                type="password"
                className='form-control'
                placeholder='🍌 contraseña'
                {...register("pass")}/> 

                <br/>
          
                <button className='btn btn-primary' type= "submit">Iniciar Sesion</button>
                <br/>
                <br/>
                <button onClick={() => Registrarse()} className='btn btn-primary'>Registrarse</button>
            </form>
        </div>
          
        </div>
      </div>
      </div>
      
        
   
  )
}

export default Login