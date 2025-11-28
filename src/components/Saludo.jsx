import React from 'react'
import logoDashes from "../assets/images/lashes-logo.svg"
import "../assets/css/Saludo.css"
const Saludo = () => {

  return (
    <>
    <div className="saludo-conteiner-logo">
      <img className="logo" src={logoDashes} alt="Logo Dashes Elegance" /> 

    </div>
        <h1 className="saludo-title">Bienvenido a Lashes Elegance</h1>
    </>
  )
}

export default Saludo