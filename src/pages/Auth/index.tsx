import * as S from "./styles";
import AuthGif from "../../assets/images/galaxy.jpg";
import { useState } from "react";
import Default from "./Default";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

const Auth: React.FC = () => {
  const [login, setLogin] = useState<number>(0);
  const ReturnLogin = () => {
    switch (login) {
      case 0:
        return <Default />;
      case 1:
        return <SingIn />;
      case 2:
        return <SingUp />;
      default:
        return <Default />;
    }
  };
  return (
    <S.Container>
      <div className="img-div">
        <img src={AuthGif} alt="Galaxy Gif" />
      </div>
      <div>{ReturnLogin()}</div>
    </S.Container>
  );
};

export default Auth;
