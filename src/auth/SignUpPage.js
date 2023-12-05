import React from "react";
import { Card } from "react-bootstrap";
import SignUpPageForm from "./SignUpPageForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
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
            SignUp
          </Card.Title>
          <SignUpPageForm />
          <br />
          <span> Already an Account ? </span>
          <Link to="/LogIn">LogIn</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUpPage;
