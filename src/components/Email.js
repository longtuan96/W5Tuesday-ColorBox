import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Email = () => {
  const isLogIn = useSelector((state) => state.isLogIn);
  const loggedEmail = useSelector((state) => state.loggedEmail);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const logIn = (e, string) => {
    console.log(`login = ${isLogIn},email= ${string}`);
    e.preventDefault();
    dispatch({ type: "LOGIN", payload: { isLogIn: true, email: string } });
  };
  const logOut = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT", payload: { isLogIn: false, email: "" } });
  };
  return (
    <div>
      {isLogIn ? (
        <div>
          <p>{loggedEmail}</p>
          <Button variant="Danger" onClick={logOut}>
            Log Out
          </Button>
        </div>
      ) : (
        <Form onSubmit={(e) => logIn(e, input)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Log In
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Email;
