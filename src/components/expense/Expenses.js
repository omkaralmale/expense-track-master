import React, { useState } from "react";
import ExpensesForm from "./ExpenseForm";
import ExpenseList from "./ExpanseList";

const exp = [];

const Expenses = () => {
  const [exps, setEXPS] = useState(exp);

  const data = (obj) => {
    setEXPS((prev) => {
      return [...prev, obj];
    });
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ExpensesForm onChange={data} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ExpenseList Data={exps} />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
