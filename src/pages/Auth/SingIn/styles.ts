import styled from "styled-components";
import { Color } from "../../../shared/utils/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  h1 {
    color: ${Color.WHITE};
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
  }
  h3 {
    color: ${Color.WHITE};
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  h4 {
    color: ${Color.WHITE};
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
  h5 {
    color: ${Color.WHITE};
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
  }
  span {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  .pink-font {
    color: ${Color.PINK_500};
    cursor: pointer;
  }
  .input-area {
    border-bottom: 2px solid ${Color.WHITE};
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      color: ${Color.WHITE};
      border: none;
      background-image: none;
      background: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      width: 100%;
      :focus {
        outline: none;
      }
      ::placeholder {
        color: ${Color.WHITE};
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
      }
    }
  }
  .buttons-form {
    display: flex;
    justify-content: space-between;
  }
  button {
    cursor: pointer;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    width: 100%;
    background-color: ${Color.PINK_500};
    color: ${Color.WHITE};
    outline: none;
    border: none;
    border-radius: 32px;
    padding: 8px 0;
  }
`;
