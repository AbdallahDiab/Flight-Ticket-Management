import { Button, Form, Input } from "@components";
import "./login.scss";

export default function Login() {
  const onFinish = () => {};
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="Password">
            <Input />
          </Form.Item>

          <Button style={{ width: "100%" }} type="primary">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
