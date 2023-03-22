import { LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Email } from "../../../assets/icons";
import { Color } from "../../../shared/utils/styles";
import * as S from "./styles";

type SingInProps = {
  setLogin: (arg0: number) => void;
};

const SingIn = (props: SingInProps) => {
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
        <h1>Sing In</h1>
        <h3>If you don’t have an account register</h3>
        <span>
          <h3>You can</h3>
          <h3
            onClick={() => {
              props.setLogin(1);
            }}
            className="pink-font"
          >
            Register here !
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
      <div className="buttons-form">
        <span>
          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ height: 0, marginTop: -8 }}
          >
            <input type="checkbox" />
          </Form.Item>
          <h5>Remember me</h5>
        </span>
        <h5>Forgot password?</h5>
      </div>
      <button type="submit">Login</button>
    </S.Container>
  );
};

export default SingIn;
