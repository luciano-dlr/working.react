import './Contador.css'
import React, { useState } from 'react'

const Contador = () => {

  const [numero, setNumero] = useState(1)

  console.log(numero)
  const mas = () => {
    if (numero < 10) {
      setNumero(numero + 1)

    }
  }


  const menos = () => {
    if (numero > 1) {
      setNumero(numero - 1)
    }
  }

  const reset = () => {
    setNumero(numero * 0)
  }

  return (
    <div className='d-flex align-items-center justify-content-center white'>
      <button className="btn btn-outline-dark" onClick={mas}> + </button>
      <span>{numero}</span>
      <button className="btn btn-outline-dark" onClick={menos}> - </button>
      <div >
        <button className="btn btn-outline-dark" onClick={reset}>Comprar</button>
      </div>
    </div>
  )
}


export default Contador


