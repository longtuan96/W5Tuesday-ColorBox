import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Email from "./Email";

const Header = () => {
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREASE", payload: 1 });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE", payload: 1 });
  };
  const getInput = (string) => {
    dispatch({ type: "INPUT", payload: string });
    console.log(string);
  };
  return (
    <div className="header" style={{ background: color }}>
      <Email />
      <h1>{`There are ${count} boxes`}</h1>
      <div className="header-input">
        <input type="text" onChange={(e) => getInput(e.target.value)} />
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
};

export default Header;
