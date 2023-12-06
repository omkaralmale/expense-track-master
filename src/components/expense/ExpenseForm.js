import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ExpensesForm = (props) => {
  const amount = useRef(0);
  const description = useRef("");
  const option = useRef("");

  const handleSubmission = (event) => {
    event.preventDefault();
    const obj = {
      amount: amount.current.value,
      description: description.current.value,
      option: option.current.value,
    };

    props.onChange(obj);
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
        </Form.Select>
      </Form.Group>

      <Button variant="danger" type="submit">
        Add Expense
      </Button>
    </Form>
  );
};

export default ExpensesForm;
