
import React from 'react'
import { useForm  } from 'react-hook-form'
import '../css/Visual.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const baseUrl = "https://localhost:44324/user/add"

const Register = () => {

const navegador = useNavigate(); 



const form = {
    username: '',
    pass: '',
    rolId: 0
}

const { register, handleSubmit} = useForm (form)


const Volver = () => {
    navegador('/')
}


const CrearUsuario  = async (data) => 
{ 
    console.log(data)

const Operador = {
    ...data,
    rolId: parseInt(data.rolId)
}    


    await axios.post(baseUrl, Operador)
    navegador('/')
}

  return (

    
    <div className='principal-register'>
        <div>
             <div className='RegisterPrincipal'  >
        
        <div className='RegisterSecundario'>
        <img className='omega' src='http://2.bp.blogspot.com/-jUx-E_d7BKg/VQWuM5T0I1I/AAAAAAAAAUs/M3i2-E6cDks/s1600/Omega-el-Fuerte.png'/>
            <form onSubmit={handleSubmit(CrearUsuario)}>

                <h1>Usuario</h1>
                <input 
                type='Text' 
                className='form-control'
                placeholder='Nombre'
                 {...register("username")}/>
                

                <h1>contraseña</h1>
                <input 
                type='password'
                className='form-control'
                placeholder='contraseña'
                {...register("pass")}
                />

                <h1>Rol</h1>
                <select className='form-select'
                {...register("rolId")}>
                    <option value='1' key='1'>Administrador</option>
                    <option value='2' key='2'>Usuario</option>
                </select>
                <br/>
                <button class="btn btn-success" type='submit'>Crear Usuario</button>
                <br/>
                <br/>
                

            </form>
            <button class="btn btn-success" onClick={Volver}>Volver Al Inicio</button>
        </div>
      
        </div>
        </div>
   
        
    </div>
    
 
  )
}

export default Register