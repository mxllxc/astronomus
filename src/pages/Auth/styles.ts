import styled from "styled-components";
import { Color } from "../../shared/utils/styles";

export const Container = styled.div`
  background-color: ${Color.BLUE_900};
  display: flex;
  flex-direction: row;

  .auth-div {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    height: 100%;
  }

  .img-div {
    width: 60vw;
    height: 100vh;
  }

  img {
    width: 60vw;
    height: 100vh;
    object-fit: cover;
    border-radius: 0 20px 20px 0;
  }
`;
