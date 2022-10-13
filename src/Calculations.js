import React, { useState } from "react";
import { connect } from "react-redux";
import { mappropstodispatch, mappropstostate } from "./redux/Map";

const Calculations = (props) => {
  const [inp1, setInp1] = useState(0);
  const [inp2, setInp2] = useState(0);


  const add_operation = () => {
    props.add_prop(parseInt(inp1),parseInt(inp2))
  };

  const minus_operation = () => {
    props.minus_prop(parseInt(inp1),parseInt(inp2))
  };

  const multiply_operation = () => {
   props.multiply_prop(parseInt(inp1),parseInt(inp2))
  };

  const divide_operation = () => {
   props.divide_prop(parseInt(inp1),parseInt(inp2))
  };

  const clear_operation = () => {
    props.clear_prop();
    setInp1(props.Clear.inpt1);
    setInp2(props.Clear.inpt2);
    props.add_clear();
    props.minus_clear();
    props.multi_clear();
    props.divide_clear();
  };
  return (
    <div>
      <div>
        <input
          placeholder="Enter quantity"
          value={inp1}
          type="number"
          onChange={(e) => {
            setInp1(e.target.value);
          }}
        />
        <input
          placeholder="Enter quantity"
          value={inp2}
          type="number"
          onChange={(e) => {
            setInp2(e.target.value);
          }}
        />

        <div>
          <button onClick={add_operation}>+</button>
          <button onClick={minus_operation}>-</button>
          <button onClick={multiply_operation}>x</button>
          <button onClick={divide_operation}>/</button>
          <button onClick={clear_operation}>Clear</button>
        </div>
      </div>

      <p>Result +: {props.Plus.result_plus}</p>
      <p>Result -: {props.Minus.result_minus}</p>
      <p>Result *: {props.Multiply.result_multiply}</p>
      <p>Result /: {props.Divide.result_divide}</p>
    </div>
  );
};

export default connect(mappropstostate, mappropstodispatch)(Calculations);
