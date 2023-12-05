import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useRef, useState, useContext } from "react";
import { AuthContext } from "./Store/ContextAPI";
import { useHistory } from "react-router-dom";

function LogInPageForm() {
  const context = useContext(AuthContext);
  const history = useHistory();
  const [errorMSG, setMSG] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtmDXCvrD-2FXli9q45y819O4fB10sh1M",
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        const errorMessage = data.error.message || "Failed to log in";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      // console.log(data.idToken);
      context.login(data.idToken);
      setMSG("");
      history.push("/Home");
    } catch (error) {
      alert(error.message);
      setMSG("Failed to log in");
    }
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
      <span style={{ color: "red" }}>{errorMSG}</span>
      <br />
      <Button variant="success" type="submit">
        Log In
      </Button>
    </Form>
  );
}

export default LogInPageForm;
