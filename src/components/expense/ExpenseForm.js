import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

const ExpensesForm = (props) => {
  const BP = useSelector((state) => state.premium.total);
  const amount = useRef(0);
  const description = useRef("");
  const option = useRef("");

  const handleSubmission = async (event) => {
    event.preventDefault();
    const obj = {
      amount: amount.current.value,
      description: description.current.value,
      option: option.current.value,
    };
    props.onAddExpense(obj);
  };

  return (
    <Form
      onSubmit={handleSubmission}
      style={{
        width: "650px",
        backgroundColor: "white",
        border: "2px solid whitesmoke",
        padding: "30px",
        marginTop: "10px",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={amount} type="number" placeholder="Enter Amount" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control ref={description} type="text" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select ref={option}>
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

      <Button variant="danger" type="submit" disabled={BP > 10000}>
        Add Expense
      </Button>
      <span
        style={{ border: "2px solid red", margin: "10px", padding: "10px" }}
        hidden={!(BP > 10000)}
      >
        BUY PREMIUM
      </span>
    </Form>
  );
};

export default ExpensesForm;
