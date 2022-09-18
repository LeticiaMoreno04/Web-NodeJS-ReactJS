import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0)
  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  const handleClick2 = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="layout">
      <span>Contador de Pessoas</span>

      <div className="contador">
        {counter}
      </div>

      <div className="buttons">
        <button className="custom-button" style={{backgroundColor: 'green'}}onClick={handleClick1}>+</button>
        <button className="custom-button" style={{backgroundColor: 'darkred'}} onClick={handleClick2}>-</button>
      </div>
    </div>
  )
}

export default App