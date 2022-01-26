import React from 'react'
import logo from "../imagenes/logo.png"
import { Link } from 'react-router-dom'
    
export const Logo = () => {
    return (
        <div className="logo"> 
             <Link to ="/"><img src={logo} alt="Logo de la pagina"></img></Link>
        </div>
    )
}
