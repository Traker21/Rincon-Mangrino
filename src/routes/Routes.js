
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import Register from '../pages/Register'
import NoMatch from  '../pages/NoMatch'
import Cookies from 'universal-cookie'
import { useSelector } from 'react-redux'

const cookies = new Cookies();



const Rutas = () => {

const selector = useSelector((state) => state)

 

  return (


    <BrowserRouter>
        <Routes>

            <Route exact path='/' element={<Login />}/>

            <Route exact path='/Menu' element={ !selector ?
              <Navigate to='/'/> : (<Menu />)}/>

            <Route exact path='/Registrar' element={<Register />}/>

            <Route path='*' element={<NoMatch/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Rutas

