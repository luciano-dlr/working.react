import './Contador.css'
import React, { useState } from 'react'


export const Contador = ({ stock, initial, onAdd }) => {

  const [numero, setNumero] = useState(initial)

  const mas = () => {
    if (numero < stock) {
      setNumero(numero + 1)

    }
  }

  const menos = () => {
    if (numero > 1) {
      setNumero(numero - 1)

    }

  }

  const comprar = () => {
    onAdd(numero);
    setNumero(1)
  }

  return (
    <div className='d-flex align-items-center justify-content-center white ' style={{ backgroundColor: 'white' }}>

      <button className="btn btn-outline-dark" onClick={mas}> + </button>
      <span className='text-dark'>{numero}</span>
      <button className="btn btn-outline-dark" onClick={menos}> - </button>
      <div >
        <button className="btn btn-outline-dark" onClick={comprar}>Comprar</button>

      </div>

    </div>
  )
}




