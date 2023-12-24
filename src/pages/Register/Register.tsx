import { Button, Form, Input } from "@components";
import fetch from "../../services/FetchInterceptor.js";

export default function Register() {
  type formValues = {
    email: string;
    password: string;
  };
  const onFinish = (values: formValues) => {
    // axios.post("http://localhost:3000/register", values);
    fetch({
      url: `register`,
      method: "post",
      data: values,
    });
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>

          <Button htmlType="submit" style={{ width: "100%" }} type="primary">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
