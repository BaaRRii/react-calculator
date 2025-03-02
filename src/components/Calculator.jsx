import { useState } from "react";
import "./Calculator.css"

function Calculator(){
  const [valueA, setValueA] = useState(0)
  const [valueB, setValueB] = useState(0)
  const [operation, setOperation] = useState("add")
  const [result, setResult] = useState(0)

  return (
    <div className="calculadora">
      <h2>Calculadora</h2>
      <div className="valores">
        <input type="number" />
        <input type="number" />
      </div>
      <div className="operaciones">
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>/</button>
      </div>
      <div className="resultado">
        <p className="titulo">Resultado</p>
        <p className="numero">{result}</p>
      </div>
    </div>
  )

}

export default Calculator;