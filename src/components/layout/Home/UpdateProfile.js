import Button from "react-bootstrap/Button";
import React from "react";
import { Card } from "react-bootstrap";
import UpdateProfileForm from "./UpdateProfileForm";

const UpdateProfile = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Winner's never quiet, Quitters never win. </Card.Header>
        <Card.Body>
          <Card.Text>
            <i>
              {" "}
              Your Profile <strong>68%</strong> completed. A complete profile
              has higher change to land your Dream Job
            </i>
          </Card.Text>
          <Button variant="danger">Complete Now</Button>
        </Card.Body>
      </Card>
      <UpdateProfileForm />
    </>
  );
};

export default UpdateProfile;
