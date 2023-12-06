import React from "react";
import { Card, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ForgotPassword = () => {
  const API_KEY = "AIzaSyBtmDXCvrD-2FXli9q45y819O4fB10sh1M";
  const handleForgot = async (event) => {
    event.preventDefault();
    const userEmail = localStorage.getItem("userEmail");
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: userEmail,
          }),
          "Content-Type": "application/json",
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
      }

      const data = await response.json();
      alert("Check your  Mail", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "28px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Reset Password
            </Card.Title>
            <Form onSubmit={handleForgot}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Email" />
              </Form.Group>
              <Button variant="success" type="submit">
                Send Link
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ForgotPassword;
