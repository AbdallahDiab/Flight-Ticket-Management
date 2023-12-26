import { AddTicket, Col, Row } from "@components";

export default function FlightDetails() {
  return (
    <Row align="middle" justify="center">
      <AddTicket type="edit" onClose={() => console.log("first")} />
    </Row>
  );
}
