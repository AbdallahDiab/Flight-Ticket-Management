import { Button, Form, Input, Row } from "@components";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks";
import { register } from "@reducers";
import { RootState } from "@store";

export default function Register() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state: RootState) => state.auth);

  type formValues = {
    email: string;
    password: string;
  };

  const rules = {
    password: [
      {
        required: true,
        pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),
        message:
          "Password must be at least 8 character, 1 uppercase, 1 lowercase,and 1 number",
      },
    ],
    confirm: [
      {
        required: true,
        message: "Please confirm your password!",
      },
      ({
        getFieldValue,
      }: {
        getFieldValue: (name: string | number | (string | number)[]) => any;
      }) => ({
        validator(_: any, value: string) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject("Passwords do not match!");
        },
      }),
    ],
  };
  const onSignUp = (values: formValues) => {
    dispatch(register({ email: values.email, password: values.password }));
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <Row justify="center" style={{ paddingBottom: "20px" }}>
          <h2>Sign Up</h2>
        </Row>
        <Row justify="center" style={{ paddingBottom: "20px" }}>
          <p>
            Already have an account? <Link to={`/login`}>Login</Link>
          </p>
        </Row>
        <Form layout="vertical" name="register-form" onFinish={onSignUp}>
          <Form.Item
            name="email"
            label="Email"
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
            hasFeedback
          >
            <Input prefix={<MailOutlined className="text-primary" />} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={rules.password}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="text-primary" />}
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            rules={rules.confirm}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="text-primary" />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
