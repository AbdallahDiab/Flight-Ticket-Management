import { Button, Card, Modal } from "@components";

import "./FlightCard.scss";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import { useState } from "react";
import { useAppDispatch } from "@hooks";
import { deleteTicket } from "@reducers";

type ticket = {
  id: number;
  capacity: number;
  date: Date;
  code: string;
};

export default function FlightCard({ ticket }: { ticket: ticket }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<number | null>(null);

  return (
    <>
      <Card
        title="Flight Card"
        extra={
          <Button
            danger
            onClick={() => {
              setOpenDeleteModal(true);
              setTicketId(ticket.id);
            }}
          >
            Delete
          </Button>
        }
      >
        <div
          className="flight-card"
          onClick={() => navigate(`/flights/${ticket.id}`)}
        >
          <p>
            Flight Code: <span>{ticket.code}</span>
          </p>
          <p>
            Date: <span>{dayjs(ticket.date).format("DD/MM/YYYY")}</span>
          </p>
          <p>
            Capacity: <span>{ticket.capacity}</span>
          </p>
        </div>
      </Card>
      <Modal
        title="Delete"
        open={openDeleteModal}
        onOk={() => dispatch(deleteTicket(ticketId))}
        onCancel={() => setOpenDeleteModal(false)}
      >
        <p>Are you sure? you will delete this ticket..</p>
      </Modal>
    </>
  );
}
