import React from "react";
import ExpenseItems from "./ExpenseItems";

const ExpenseList = (props) => {
  return (
    <ol className="list-group">
      {props.Data.map((items, index) => (
        <ExpenseItems
          edit={props.edit}
          delete={props.delete}
          key={items.id}
          id={items.id}
          amount={items.amount}
          description={items.description}
          option={items.option}
        />
      ))}
    </ol>
  );
};

export default ExpenseList;
