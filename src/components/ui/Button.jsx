import React from 'react'
import "../../assets/css/ui/Button.css"

const Button = ({service}) => {
  return (
    <>
    <button className='comic-button'>{service}</button>
    </>
  )
}

export default Button