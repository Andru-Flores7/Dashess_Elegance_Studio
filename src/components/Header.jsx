import React from 'react'
import logoDashes from "../assets/images/lashes-logo.svg"
import "../assets/css/Header.css"
import Compartir from './ui/Compartir'
const Header = () => {
  return (
    <header className="header" >
   <div className='header-conteiner-title-logo'>

    <img className='logo' src={logoDashes} alt="Logo" /> 
    <h1 className='header-title'>Lashes Elegance</h1>

    </div>
    <Compartir/>
    </header>
  )
}

export default Header