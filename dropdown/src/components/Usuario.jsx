import React from 'react'

export const Usuario = ({ usuario }) => {
  const { id, nombre, telefono, razonSocial, nit, codigo } = usuario;
  return (
<div className='container'>
  <div className='card'>
    <div className='box'>
      <p className='title'>Código</p>
      <p className='content'>{codigo}</p>
    </div>
    <div className='box'>
      <p className='title'>Nombre</p>
      <p className='content'>{nombre}</p>
    </div>
    <div className='box'>
      <p className='title'>Razón social</p>
      <p className='content'>{razonSocial}</p>
    </div>
    <div className='box'>
      <p className='title'>NIT</p>
      <p className='content'>{nit}</p>
    </div>
    <div className='box'>
      <p className='title'>Teléfono</p>
      <p className='content'>{telefono}</p>
    </div>
  </div>
</div>

  )
}