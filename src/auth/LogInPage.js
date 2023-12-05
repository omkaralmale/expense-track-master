import React from "react";
import { Card } from "react-bootstrap";
import LogInPageForm from "./LogInForm";
import { Link } from "react-router-dom";

const LogInPage = () => {
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
              LogIn
            </Card.Title>
            <LogInPageForm />
            <br />
            <span> Don't have an Account ? </span>
            <Link to="/SignUp">SignUp</Link>
            <br />
            <span> Forgot your password </span>
            <Link to="/forgot-password">Forgot Password</Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default LogInPage;
