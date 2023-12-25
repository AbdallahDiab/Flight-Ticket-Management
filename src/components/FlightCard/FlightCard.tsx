import { Button, Card } from "@components";
import "./FlightCard.scss";
import { useNavigate } from "react-router-dom";

export default function FlightCard() {
  const navigate = useNavigate();
  return (
    <Card
      title="Flight Card"
      extra={<Button danger>Delete</Button>}
      className="flight-card"
      onClick={() => navigate("/flight-details")}
    >
      <p>flightCode:</p>
      <p>date:</p>
      <p>capacity:</p>
    </Card>
  );
}
