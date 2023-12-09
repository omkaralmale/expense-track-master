import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../STORE/Auth/AuthSlice";

const LogInPageForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
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
      dispatch(login(data.idToken));
      console.log(data.email);
      localStorage.setItem("user", data.email);
      setMSG("");
      history("/expenses");
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
};

export default LogInPageForm;
