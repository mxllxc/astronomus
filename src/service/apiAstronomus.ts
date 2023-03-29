import axios from "axios";
import { User } from "../shared/types";

const apiAstronomus = axios.create({
  baseURL: `${process.env.REACT_APP_API}/`,
});

export const getUsers = () => {
  try {
    return apiAstronomus.get<any>("/user");
  } catch (error) {
    console.log("Error");
  }
};
