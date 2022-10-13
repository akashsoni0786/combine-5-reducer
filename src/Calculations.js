import React, { useState } from "react";
import { connect } from "react-redux";
import { mappropstodispatch, mappropstostate } from "./redux/Map";

const Calculations = (props) => {
  const [inp1, setInp1] = useState(0);
  const [inp2, setInp2] = useState(0);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const add_operation = () => {
    props.add_prop(parseInt(inp1), parseInt(inp2));
    setShow1(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };

  const minus_operation = () => {
    props.minus_prop(parseInt(inp1), parseInt(inp2));
    setShow1(false);
    setShow2(true);
    setShow3(false);
    setShow4(false);
  };

  const multiply_operation = () => {
    props.multiply_prop(parseInt(inp1), parseInt(inp2));
    setShow1(false);
    setShow2(false);
    setShow3(true);
    setShow4(false);
  };

  const divide_operation = () => {
    props.divide_prop(parseInt(inp1), parseInt(inp2));
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(true);
  };

  const clear_operation = () => {
    props.clear_prop();
    props.add_clear();
    props.minus_clear();
    props.multi_clear();
    props.divide_clear();
    setInp1(props.Clear.inpt1);
    setInp2(props.Clear.inpt2);
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

      {show1 && <p>Result : {props.Plus.result_plus}</p>}
      {show2 && <p>Result : {props.Minus.result_minus}</p>}
      {show3 && <p>Result : {props.Multiply.result_multiply}</p>}
      {show4 && <p>Result : {props.Divide.result_divide}</p>}
    </div>
  );
};

export default connect(mappropstostate, mappropstodispatch)(Calculations);
