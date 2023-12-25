import { Button, Form, Input, Row } from "@components";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks";
import { login } from "@reducers";

export default function Login() {
  const dispatch = useAppDispatch();
  type formValues = {
    email: string;
    password: string;
  };
  const rules = {
    password: [
      {
        required: true,
        message: "Please enter your password!",
      },
    ],
  };

  const onLogin = (values: formValues) => {
    dispatch(login(values));
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <Row style={{ paddingBottom: "20px" }} justify="center">
          <h2>Login</h2>
        </Row>
        <Row justify="center" style={{ paddingBottom: "20px" }}>
          <p>
            Don't have an account? <Link to={`/register`}>Sign up</Link>
          </p>
        </Row>
        <Form layout="vertical" name="login-form" onFinish={onLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email address",
              },
              {
                type: "email",
                message: "Please enter a validate email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules.password}>
            <Input />
          </Form.Item>

          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
