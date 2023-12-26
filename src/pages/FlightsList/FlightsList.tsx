import {
  Col,
  FlightCard,
  FloatButton,
  Row,
  Modal,
  AddTicket,
  Skeleton,
} from "@components";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks";
import { getTickets } from "@reducers";
import { RootState } from "@store";

export default function FlightsList() {
  const dispatch = useAppDispatch();
  const { tickets, isLoading } = useAppSelector(
    (state: RootState) => state.ticket
  );
  const [openAddModal, setOpenAddModal] = useState(false);
  useEffect(() => {
    dispatch(getTickets());
  }, []);
  return (
    <>
      {isLoading && <Skeleton />}
      <Row gutter={[48, 48]}>
        {tickets.map((ticket) => {
          return (
            <Col key={ticket.id} xs={24} sm={24} md={12} lg={6}>
              <FlightCard ticket={ticket} />
            </Col>
          );
        })}
      </Row>
      <FloatButton
        icon={<PlusOutlined />}
        onClick={() => setOpenAddModal(true)}
      />
      <Modal
        title="Add Ticket"
        centered
        open={openAddModal}
        destroyOnClose
        onCancel={() => setOpenAddModal(false)}
        footer={null}
      >
        <AddTicket type="add" onClose={() => setOpenAddModal(false)} />
      </Modal>
    </>
  );
}
