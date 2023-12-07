import React, { useCallback, useEffect, useState } from "react";
import ExpensesForm from "./ExpenseForm";
import ExpenseList from "./ExpanseList";
import { saveAs } from "file-saver";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const Expenses = () => {
  const [exps, setEXPS] = useState([]);
  const pro = useSelector((state) => state.premium.pro);
  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://expense-tracker-7260d-default-rtdb.firebaseio.com/expenses.json`
      );
      const data = await response.json();
      const loadedExpense = [];
      for (const key in data) {
        loadedExpense.push({
          id: key,
          amount: data[key].amount,
          description: data[key].description,
          option: data[key].option,
        });
      }
      setEXPS(loadedExpense);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const addExpenseHandler = async (expenseData) => {
    try {
      const response = await fetch(
        `https://expense-tracker-7260d-default-rtdb.firebaseio.com/expenses.json`,
        {
          method: "POST",
          body: JSON.stringify(expenseData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      getData();
    } catch (error) {
      alert(error);
    }
  };

  const deleteExpenseHandler = async (id) => {
    try {
      const response = await fetch(
        `https://expense-tracker-7260d-default-rtdb.firebaseio.com/expenses/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      getData();
    } catch (error) {
      alert(error);
    }
  };

  const editExpenseHandler = async (id, updatedExpenseData) => {
    try {
      const response = await fetch(
        `https://expense-tracker-7260d-default-rtdb.firebaseio.com/expenses/${id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedExpenseData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      getData();
    } catch (error) {
      alert(error);
    }
  };
  const convertToCSV = () => {
    if (exps) {
      const csvData = convertArrayToCSV(exps);
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
      saveAs(blob, "api_data.csv");
    }
  };
  const convertArrayToCSV = (dataArray) => {
    console.log(dataArray);
    const csvContent = dataArray
      .map((row) => {
        return `${row.description},${row.amount},${row.option}`;
      })
      .join("\n");

    return csvContent;
  };
  const download = () => {
    convertToCSV();
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {pro && (
            <Button
              onClick={download}
              style={{ border: "2px solid grey", color: "grey" }}
              variant="white"
              className="mr-5"
            >
              Download PDF
            </Button>
          )}
          <ExpensesForm onAddExpense={addExpenseHandler} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ExpenseList
            Data={exps}
            delete={deleteExpenseHandler}
            edit={editExpenseHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
