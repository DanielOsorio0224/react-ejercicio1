import { useState } from "react"

export const EjercicioComponent2 = () => {
  
  const [nombre, setNombre] = useState()
  const [apellido, setApellido] = useState()
  const [edad, setEdad] = useState()  

  const actualizarNombre = e =>{
    setNombre(e.target.value)
  }
  const actualizarApellidos = e =>{
    setApellido(e.target.value)
  }
  const actualizarEdad = e =>{
    setEdad(e.target.value)
  }
  return (
    <div>
      <h2>Datos personales</h2>
      <p>{nombre} {apellido} {edad}</p>
      <p>Introduce la información requerida en los campos</p>
      <p>
        Nombre
        &nbsp;
        <input type="text" onChange={actualizarNombre} placeholder="Introduce tu nombre "/>&nbsp;
        Apellidos
        &nbsp;
        <input type="text" onChange={actualizarApellidos} placeholder="Introduce tus apellidos "/>&nbsp;
        Edad
        &nbsp;
        <input type="number" onChange={actualizarEdad} placeholder="Introduce tu edad "/>&nbsp;      
        </p>
    </div>
  )
}
