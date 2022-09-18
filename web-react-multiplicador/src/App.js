import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);
    
  function handleChangeNum1(event){
    setNum1(event.target.value);
}

function handleChangeNum2(event){
  setNum2(event.target.value);
}

const handleClickCalcular = () => {
  setResultado(num1 * num2)
}


  return (
    <div className="layout">
      <span>Multiplicador de números</span>
      <input className="input" type="text" placeholder='Digite o 1º número' onChange={handleChangeNum1}/>
      <input className="input" type="text" placeholder='Digite o 2º número' onChange={handleChangeNum2}/>
      <div className="buttons">
        <button className="custom-button" style={{backgroundColor: 'darkblue'}} onClick={handleClickCalcular}>Calcular</button>
      </div>
      <div>        
        <span>
          Resultado: {resultado}
        </span>
      </div>
    </div>
  )
}

export default App