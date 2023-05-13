import React, { useState } from "react"
import "../style.css"

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    // const [operator, setOperator] = useState("");

    const num1Value = (e) => {
        setNum1(e.target.value);
    }

    const num2Value = (e) => {
        setNum2(e.target.value);
    }

    function validation() {
        if (num1 === "") {
            setError("Error :  Num1 cannot be empty")
            setResult("");
            return false;
        }

        if (num2 === "") {
            setError("Error :  Num2 cannot be empty")
            setResult("");
            return false;
        }
        setError('')
        return true;
    }

    function operatorInput(operator) {
        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);
        let res = 0;
        switch (operator) {
            case "+":
                res = n1 + n2;
                break;

            case "-":
                res = n1 - n2;
                break;

            case "*":
                res = n1 * n2;
                break;

            case "/":
                res = n1 / n2;
                break;
            default:
                break;
        }
        setResult(`${res}`);
    }

    return (
        <div>
            <div className="cal">
                <h1>React Calculator</h1>

                <input type="text" value={num1} placeholder="Num 1" onChange={num1Value} />
                <br /><br />
                <input type="text" value={num2} placeholder="Num 2" onChange={num2Value} />
                <br /> <br />
            </div>

            <div className="op">
                <button onClick={() => {
                    if (validation()) {
                        operatorInput("+")
                    }
                }}>+</button>
                <button onClick={() => {
                    if (validation()) {
                        operatorInput("-")
                    }
                }}>-</button>
                <button onClick={() => {
                    if (validation()) {
                        operatorInput("*")
                    }
                }}>*</button>
                <button onClick={() => {
                    if (validation()) {
                        operatorInput("/")
                    }
                }}>/</button>
            </div>
            <br />

            <div className="msg">
                {error && <div style={{ color: "red", marginLeft: "4rem" }}>{error}</div>}
                {result && <div style={{ color: "green", marginLeft: "4rem" }}>Result = {result}</div>}
                <br />
                {result && <div style={{ color: "green", marginLeft: "4rem" }}>Success : Your result is shown above!</div>}
            </div>

        </div>
    )
}

export default Calculator;