import { Avatar, Dropdown, Space } from "@components";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Icon } from "@ui";

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
            <Avatar size={42} icon={<UserOutlined />} />
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
