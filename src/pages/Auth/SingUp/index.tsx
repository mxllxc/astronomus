import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { Email } from "../../../assets/icons";
import { Color } from "../../../shared/utils/styles";
import * as S from "./styles";

type SingUpProps = {
  setLogin: (arg0: number) => void;
};

const SingUp = (props: SingUpProps) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <S.Container
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div>
        <h1>Sing Up</h1>
        <h3>If you already have an account register</h3>
        <span>
          <h3>You can</h3>
          <h3
            onClick={() => {
              props.setLogin(0);
            }}
            className="pink-font"
          >
            Login here!
          </h3>
        </span>
      </div>
      <div className="input-area">
        <h4>Email</h4>
        <span>
          <Email />
          <Form.Item
            rules={[{ required: true, message: "Please input your email!" }]}
            name="email"
            style={{ height: 0, marginTop: -8 }}
          >
            <input type="email" placeholder="Enter your email address" />
          </Form.Item>
        </span>
      </div>
      <div className="input-area">
        <h4>Username</h4>
        <span>
          <UserOutlined style={{ color: Color.WHITE, marginBottom: 3 }} />
          <Form.Item
            rules={[{ required: true, message: "Please input your username!" }]}
            name="username"
            style={{ height: 0, marginTop: -8 }}
          >
            <input type="text" placeholder="Enter your username" />
          </Form.Item>
        </span>
      </div>
      <div className="input-area">
        <h4>Password</h4>
        <span>
          <LockOutlined style={{ color: Color.WHITE, marginBottom: 3 }} />
          <Form.Item
            rules={[{ required: true, message: "Please input your password!" }]}
            name="password"
            style={{ height: 0, marginTop: -8 }}
          >
            <input type="password" placeholder="Enter your Password" />
          </Form.Item>
        </span>
      </div>
      <div className="input-area">
        <h4>Confirm password</h4>
        <span>
          <LockOutlined style={{ color: Color.WHITE, marginBottom: 3 }} />
          <Form.Item
            rules={[
              { required: true, message: "Please input your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
            name="password-confirm"
            style={{ height: 0, marginTop: -8 }}
          >
            <input type="password" placeholder="Confirm your Password" />
          </Form.Item>
        </span>
      </div>
      <button type="submit">Register</button>
    </S.Container>
  );
};

export default SingUp;
