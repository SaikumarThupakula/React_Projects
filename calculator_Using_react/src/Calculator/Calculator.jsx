import React, { useState } from "react";
import "./CalculatorCss.css";
const Calculator = () => {
  const [result, setResult] = useState("");
  // eslint-disable-next-line no-unused-vars
  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };
  const handleBackSpace = () => {
    setResult(result.slice(0, -1));
  };
  const handleClear = () => {
    setResult("");
  };
  const handleCalculation = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
      setTimeout(() => {
        setResult("");
      }, 2000);
    }
  };
  return (
    <div>
      <h1>Calculator</h1>
      <div className="container">
        <form>
          <input
            type="text"
            value={result}
            id="result"
            name="result"
            onChange={handleClick}
          />
        </form>
        <div className="keys">
          <button className="unique" id="clear" onClick={handleClear}>
            Clear
          </button>
          <button className="unique" onClick={handleBackSpace}>
            C
          </button>
          <button className="unique" name="%" onClick={handleClick}>
            %
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" className="unique" onClick={handleClick}>
            *
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" className="unique" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" className="unique" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button
            name="="
            className="unique"
            id="equalsTo"
            onClick={handleCalculation}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
