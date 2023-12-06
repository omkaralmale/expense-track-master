import React from "react";

const ExpenseItems = (props) => {
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

  const AmountStyle = {
    fontStyle: "italic",
    fontSize: "24px",
    color: "red",
  };

  return (
    <li style={itemStyle}>
      <div>
        <div>
          <strong>{props.description.toUpperCase()}</strong>
        </div>
        <div style={dateStyle}>{props.option.toLowerCase()}</div>
      </div>
      <div>
        <div style={AmountStyle}>${props.amount}</div>
        <div style={dateStyle}>{new Date().toLocaleDateString("en-GB")}</div>
      </div>
    </li>
  );
};

export default ExpenseItems;
