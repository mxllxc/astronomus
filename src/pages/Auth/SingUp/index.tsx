import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Context from "@ant-design/icons/lib/components/Context";
import { Form, notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { Email } from "../../../assets/icons";
import { postUsers } from "../../../service/apiAstronomus";
import { Color } from "../../../shared/utils/styles";
import * as S from "./styles";

type SingUpProps = {
  setLogin: (arg0: number) => void;
};

const SingUp = (props: SingUpProps) => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement, data: string) => {
    api.error({
      message: "Opss, aconteceu um erro",
      description: <Context.Consumer>{() => `${data}`}</Context.Consumer>,
      placement,
    });
  };

  const onFinish = async (values: any) => {
    const value = {
      email: values.email,
      name: values.username,
      password: values.password,
    };
    const response = await postUsers(value);

    if (response?.status !== 201) {
      openNotification("topRight", response?.data.message);
    }
    form.resetFields();
    // Navigate
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <S.Container
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {contextHolder}
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
