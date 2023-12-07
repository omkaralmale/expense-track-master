import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { setPro } from "../../STORE/Premium/PremiumSlice";
const ExpensesForm = (props) => {
  const dispatch = useDispatch();
  const BP = useSelector((state) => state.premium.total);
  const pro = useSelector((state) => state.premium.pro);
  const amount = useRef(0);
  const description = useRef("");
  const option = useRef("");

  const handleSubmission = async (event) => {
    event.preventDefault();
    console.log(description.current.value);
    const obj = {
      amount: amount.current.value,
      description: description.current.value,
      option: option.current.value,
    };
    props.onAddExpense(obj);
  };

  const handleBuy = () => {
    dispatch(setPro());
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

      <Button variant="danger" type="submit" disabled={BP > 10000 && !pro}>
        Add Expense
      </Button>
      <div hidden={!(BP > 10000 && !pro)}>
        <div
          onClick={handleBuy}
          style={{
            border: "2px solid gold",
            margin: "10px",
            padding: "10px",
            textAlign: "center",
            background: "gold",
          }}
        >
          BUY PREMIUM
        </div>
        <p>
          To ensure uninterrupted access to premium features, strive to stay
          within the 10,000 limit ⏳. When nearing this threshold, consider a
          premium subscription for advanced tools 🚀 to track expenses and
          manage finances more effectively.
        </p>
      </div>
    </Form>
  );
};

export default ExpensesForm;
