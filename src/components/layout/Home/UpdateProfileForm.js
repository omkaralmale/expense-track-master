import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateEmail } from "../../../STORE/updateProfile/UpdateProfile";
const UpdateProfileForm = () => {
  const API_KEY = "AIzaSyBtmDXCvrD-2FXli9q45y819O4fB10sh1M";
  const url = useRef("");
  const gitName = useRef("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token not found. Please log in again.");
      return;
    }

    if (!gitName.current.value || !url.current.value) {
      alert("GitHub username and profile link are required fields.");
      return;
    }

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: token,
            displayName: gitName.current.value,
            photoUrl: url.current.value,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
      }

      const data = await response.json();
      alert("Profile Updated:", data);
      // console.log(data);
    } catch (error) {
      // console.log("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const getData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        if (data.users && data.users.length > 0) {
          const user = data.users[0];
          if (user.displayName) {
            gitName.current.value = user.displayName;
          }
          if (user.photoUrl) {
            url.current.value = user.photoUrl;
          }
          localStorage.setItem("userEmail", user.email);
          dispatch(updateEmail(user.email));
        }
      } else {
        throw new Error(response);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getData(); // Fetch user data when the component mounts
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <h4>Contact Details</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div style={{ display: "flex" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              height="40px"
            />
            <Form.Control
              ref={gitName}
              style={{ width: "500px", marginLeft: "10px" }}
              type="text"
              placeholder="GitHub Username"
            />
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <img
              src="https://static.thenounproject.com/png/2391755-200.png"
              alt="GitHub"
              height="40px"
            />
            <Form.Control
              ref={url}
              type="text"
              placeholder="Profile Link"
              style={{ width: "500px", marginLeft: "10px" }}
            />
          </div>
        </Form.Group>
        <Button variant="danger" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProfileForm;
