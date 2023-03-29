import * as S from "./styles";
import AuthGif from "../../assets/images/galaxy.jpg";
import { useEffect, useState } from "react";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../shared/redux/selectors";
import { getUsers } from "../../shared/redux/slices/user";
import { AppDispatch } from "../../shared/types";
import { postUsers } from "../../service/apiAstronomus";

const Auth: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(getUsers());
    console.log(user);
  }, []);

  const [login, setLogin] = useState<number>(0);
  const ReturnLogin = () => {
    switch (login) {
      case 0:
        return <SingIn setLogin={setLogin} />;
      case 1:
        return <SingUp setLogin={setLogin} />;
      default:
        return <SingIn setLogin={setLogin} />;
    }
  };

  return (
    <S.Container>
      <div className="img-div">
        <img src={AuthGif} alt="Galaxy Gif" />
      </div>
      <div className="auth-div">{ReturnLogin()}</div>
    </S.Container>
  );
};

export default Auth;
