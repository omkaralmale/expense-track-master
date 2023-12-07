// ExpenseItems.js
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ExpenseItems = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(props.description);
  const [editedAmount, setEditedAmount] = useState(props.amount);
  const [editedOption, setEditedOption] = useState(props.option);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const updatedExpenseData = {
      amount: editedAmount,
      description: editedDescription,
      option: editedOption,
    };
    props.edit(props.id, updatedExpenseData);
    setIsEditing(false);
  };

  const itemStyle = {
    width: "650px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "2px solid #ccc",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
  };

  const dateStyle = {
    fontStyle: "italic",
    color: "#888",
  };

  const amountStyle = {
    fontStyle: "italic",
    fontSize: "24px",
    color: "red",
  };

  return (
    <li style={itemStyle}>
      {isEditing ? (
        <div>
          <div>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                value={editedAmount}
                onChange={(e) => setEditedAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                value={editedOption}
                onChange={(e) => setEditedOption(e.target.value)}
              >
                <option>Food</option>
                <option>Entertainment</option>
                <option>Salary</option>
                <option>Education</option>
                <option>Loan</option>
                <option>Transportation</option>
                <option>Utilities</option>
                <option>Travel</option>
                <option>Healthcare</option>
                <option>Shopping</option>
                <option>Insurance</option>
                <option>Charity/Donations</option>
                <option>Investments</option>
                <option>Personal Care</option>
                <option>Home Maintenance</option>
                <option>Subscription Services</option>
                <option>Gifts</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Button variant="success" onClick={handleSaveEdit}>
              Save
            </Button>{" "}
            <Button variant="danger" onClick={handleCancelEdit}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div>
              <strong style={{ color: "darkred" }}>
                {props.description.toUpperCase()}
              </strong>
              <div style={dateStyle}>{props.option.toLowerCase()}</div>
              <div style={dateStyle}>
                {new Date().toLocaleDateString("en-GB")}
              </div>
            </div>
          </div>
          <div style={amountStyle}>${props.amount}</div>
          <div>
            <Button variant="warning" onClick={handleEditClick}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={() => props.delete(props.id)}>
              Delete
            </Button>
          </div>
        </>
      )}
    </li>
  );
};

export default ExpenseItems;
