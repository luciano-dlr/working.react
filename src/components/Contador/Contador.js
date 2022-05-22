import React , { useState } from 'react'


const Contador = () => {

    
    const [numero, setNumero] = useState(0)
   
console.log(numero)
    const mas = () =>{
        setNumero(numero+1)
    }

    const menos  = () => {

        setNumero(numero-1)

    }

  return (
    <div>
    <button onClick ={mas}> + </button>
    <span>{numero}</span>
    <button onClick ={menos}> - </button>
</div>
  )
}


export default Contador


