import {
  Col,
  FlightCard,
  Layout,
  Navbar,
  FloatButton,
  Row,
  Modal,
  AddTicket,
} from "@components";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#000",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
};

const contentStyle: React.CSSProperties = {
  // textAlign: "center",
  backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  minHeight: 120,
  padding: "5%",
  lineHeight: "120px",
  color: "#fff",
  height: "calc(100vh - 64px)",
};
const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
};
export default function FlightsList() {
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Navbar />
      </Header>
      <Content style={contentStyle}>
        <Row gutter={[12, 12]}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
            return (
              <Col xs={24} sm={24} md={12} lg={6}>
                <FlightCard />
              </Col>
            );
          })}
        </Row>
        <FloatButton
          icon={<PlusOutlined />}
          onClick={() => setOpenAddModal(true)}
        />
      </Content>
      <Modal
        title="Add Ticket"
        centered
        open={openAddModal}
        destroyOnClose
        onCancel={() => setOpenAddModal(false)}
        footer={null}
      >
        <AddTicket onAddSucc={() => setOpenAddModal(false)} />
      </Modal>
    </Layout>
  );
}
