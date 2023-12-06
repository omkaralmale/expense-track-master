import React from "react";
import ExpenseItems from "./ExpenseItems";

const ExpenseList = (props) => {
  return (
    <ol className="list-group">
      {props.Data.map((items, index) => (
        <ExpenseItems
          key={items.id}
          amount={items.amount}
          description={items.description}
          option={items.option}
        />
      ))}
    </ol>
  );
};

export default ExpenseList;
