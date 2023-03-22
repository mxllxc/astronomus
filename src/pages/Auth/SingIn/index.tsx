import { LockOutlined } from "@ant-design/icons";
import { Email } from "../../../assets/icons";
import { Color } from "../../../shared/utils/styles";
import * as S from "./styles";

type SingInProps = {
  setLogin: (arg0: number) => void;
};

const SingIn = (props: SingInProps) => {
  return (
    <S.Container>
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
          <input type="email" placeholder="Enter your email address" />
        </span>
      </div>
      <div className="input-area">
        <h4>Password</h4>
        <span>
          <LockOutlined style={{ color: Color.WHITE, marginBottom: 3 }} />
          <input type="password" placeholder="Enter your Password" />
        </span>
      </div>
      <div className="buttons-form">
        <span>
          <input type="checkbox" />
          <h5>Remember me</h5>
        </span>
        <h5>Forgot password?</h5>
      </div>
      <button type="submit">Login</button>
    </S.Container>
  );
};

export default SingIn;
