import React from 'react'

export const Usuario = ({ usuario }) => {
  const { id, nombre, telefono } = usuario;
    return (
    <div className='container'>
        <div className='card'>
            <p>{nombre}</p>
            <p>{telefono}</p>
        </div>
    </div>
  )
}