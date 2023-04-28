// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Agregar = () => {

  const titulo = "Agregar Pelicula";

  return (
    <>
        <h2>{titulo}</h2>
        <form>
          <input  type="text"
                  id="titulo"
                  name="titulo"
                  placeholder="Titulo"></input>
          <br/>
          <input  type="text"
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripcion"></input>
          <br/>
          <input  
                  className="botonAgregar"
                  id="botonAgregar"
                  value="Agregar"/>
        </form>
    </>
  )
}
