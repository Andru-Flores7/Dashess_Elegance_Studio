import React from 'react'
import logoDashes from "../assets/images/lashes-logo.svg"
import "../assets/css/Header.css"
import Compartir from './ui/Compartir'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header" >
   <div className='header-conteiner-title-logo'>

    <img className='logo' src={logoDashes} alt="Logo" /> 
    <Link style={{textDecoration: "none"}} to="/">
    <h1 className='header-title'>Lashes Elegance</h1>
    </Link>
    </div>
    <Compartir/>
    </header>
  )
}

export default Header