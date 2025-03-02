import { useState, useEffect } from "react";
import Resultado from "./Resultado";
import "./Calculator.css"

function Calculator(){
  const [valueA, setValueA] = useState(0)
  const [valueB, setValueB] = useState(0)
  const [operation, setOperation] = useState("add")
  const [result, setResult] = useState(0)

  useEffect(() => {
    calculateResult(valueA, valueB, operation)
  }, [valueA, valueB, operation])

  const handleOperation = (op) =>{
    setOperation(op)
    calculateResult(valueA, valueB, op)
  }

  const calculateResult = (a, b, op) =>{
    switch(op){
      case "add":
        setResult(a+b)
        break
      case "subtract":
        setResult(a-b)
        break
      case "multiply":
        setResult(a*b)
        break
      case "divide":
        if(b !== 0){
          setResult(a/b)
        }
        else{
          setResult("NaN")
        }
        break
      default:
        setResult(0)
    }
  }
    
  return (
    <div className="calculadora">
      <h2>Calculadora</h2>
      <div className="valores">
        <input type="number" value={valueA} onChange={(e) => setValueA(Number(e.target.value))}/>
        <input type="number" value={valueB} onChange={(e) => setValueB(Number(e.target.value))}/>
      </div>
      <div className="operaciones">
        <button onClick={() => handleOperation("add")} style={{ outline: operation === "add" ? "1px solid" : "none" }}>+</button>
        <button onClick={() => handleOperation("subtract")} style={{ outline: operation === "subtract" ? "1px solid" : "none" }}>-</button>
        <button onClick={() => handleOperation("multiply")} style={{ outline: operation === "multiply" ? "1px solid" : "none" }}>x</button>
        <button onClick={() => handleOperation("divide")} style={{ outline: operation === "divide" ? "1px solid" : "none" }}>/</button>
      </div>
      <div className="resultado">
        <p className="titulo">Resultado</p>
        <div className="numero">
          <Resultado resultado={result}></Resultado>
        </div>
      </div>
    </div>
  )

}

export default Calculator;