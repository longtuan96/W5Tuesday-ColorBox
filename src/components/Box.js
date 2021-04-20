import React, { useState } from "react";
import { useSelector } from "react-redux";

const Box = ({ num }) => {
  const loggedEmail = useSelector((state) => state.loggedEmail);
  const [showEmail, setShowEmail] = useState("");
  const [input, setInput] = useState("");
  const getInput = (string) => {
    setInput(string);
    setShowEmail(loggedEmail);
  };
  return (
    <div className="box" style={{ background: input }}>
      <div className="box-div">
        {`box ${num}`}
        <p>{showEmail}</p>
      </div>
      <div className="box-div">
        <input type="text" onChange={(e) => getInput(e.target.value)} />
      </div>
    </div>
  );
};

export default Box;
