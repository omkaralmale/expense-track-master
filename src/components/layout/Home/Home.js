import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Welcome to Expense Tracker </Card.Title>
        <Card.Text style={{ textDecoration: "underline" }}>
          Your Profile is incomplete
        </Card.Text>
        <Link to="/update-profile">
          <Button variant="danger">Complete Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Home;
