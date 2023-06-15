import { useState } from "react";
import ProtTypes from "prop-types";

export const EjercicioComponent = ({year}) => {
  
  const [numero, setNumero] = useState(year)

  const diminuirYear = () =>{
    setNumero(numero-1)
  }

  const aumentarYear = () =>{
    setNumero(numero+1)
  }

  const cambiarYear = e =>{
    let dato = parseInt(e.target.value)
    Number.isInteger(dato)? setNumero(dato): setNumero(year)
  }

    return (
    <div>
        <h2> UseState Ejercicio </h2>
        <strong>{numero}</strong>
        <hr/>
        <button onClick={diminuirYear}>Anterior</button>    
        &nbsp;
        <button onClick={aumentarYear}>siguiente</button>
        <p>
            <input onChange={cambiarYear} type="text" placeholder="Cambia el año"/>
        </p>
    </div>
  )
}

EjercicioComponent.propTypes = {
    year: ProtTypes.number.isRequired
}
