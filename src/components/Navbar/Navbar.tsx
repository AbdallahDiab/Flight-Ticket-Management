import { Avatar, Col, Dropdown, Row, Space } from "@components";
import { useNavigate } from "react-router-dom";
// import Utils from "src/utilities";

export default function Navbar() {
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </div>
      ),
    },
  ];
  return (
    <>
      <h2>Flight Ticket App</h2>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {/* <Icon name="avatar" size={24} strokeColor="white" /> */}
            <Avatar size={42}>
              {/* {Utils.getNameInitial(`Ali Mog`)} */}
              AH
            </Avatar>
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
