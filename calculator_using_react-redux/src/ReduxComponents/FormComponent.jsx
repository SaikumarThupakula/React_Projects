import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttons, calculation, clearAll, backSpace } from "../Redux/Actions";
import "./CalculatorComponent.css";
const FormComponent = () => {
  const dispatch = useDispatch();
  const buttonNum = useSelector((state) => state.Calculator.number);
  const calRes = useSelector((state) => state.Calculator.result);
  return (
    <div>
      <h1>Calculator</h1>
      <div className="container">
        <input
          type="text"
          value={calRes.length === 0 ? buttonNum : calRes}
          onChange={(state) => state.Calculator.result}
        />
        <div className="keys">
          <button
            className="unique"
            id="clear"
            onClick={() => dispatch(clearAll())}
          >
            Clear
          </button>
          <button className="unique" onClick={() => dispatch(backSpace())}>
            C
          </button>
          <button
            className="unique"
            value="%"
            onClick={() => dispatch(buttons("%"))}
          >
            %
          </button>
          <button value="7" onClick={() => dispatch(buttons("7"))}>
            7
          </button>
          <button value="8" onClick={() => dispatch(buttons("8"))}>
            8
          </button>
          <button value="9" onClick={() => dispatch(buttons("9"))}>
            9
          </button>
          <button
            className="unique"
            value="*"
            onClick={() => dispatch(buttons("*"))}
          >
            *
          </button>
          <button value="4" onClick={() => dispatch(buttons("4"))}>
            4
          </button>
          <button value="5" onClick={() => dispatch(buttons("5"))}>
            5
          </button>
          <button value="6" onClick={() => dispatch(buttons("6"))}>
            6
          </button>
          <button
            value="-"
            className="unique"
            onClick={() => dispatch(buttons("-"))}
          >
            -
          </button>
          <button value="1" onClick={() => dispatch(buttons("1"))}>
            1
          </button>
          <button value="2" onClick={() => dispatch(buttons("2"))}>
            2
          </button>
          <button value="3" onClick={() => dispatch(buttons(3))}>
            3
          </button>
          <button
            className="unique"
            value="+"
            onClick={() => dispatch(buttons("+"))}
          >
            +
          </button>
          <button value="0" onClick={() => dispatch(buttons("0"))}>
            0
          </button>
          <button className="unique" onClick={() => dispatch(buttons("."))}>
            .
          </button>
          <button
            className="unique"
            id="equalsTo"
            onClick={() => dispatch(calculation())}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
