import React from "react";
import ExpenseItems from "./ExpenseItems";
import { useDispatch } from "react-redux";
import { addTotal } from "../../STORE/Premium/PremiumSlice";
const ExpenseList = (props) => {
  const dispatch = useDispatch();
  const total = props.Data.reduce((acc, sum) => acc + parseInt(sum.amount), 0);
  dispatch(addTotal(total));

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
