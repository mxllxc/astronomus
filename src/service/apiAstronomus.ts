import axios from "axios";
import { CreateUser } from "../shared/types";

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

export const postUsers = (data: CreateUser) => {
  try {
    return apiAstronomus.post<any>("/user", {
      data,
    });
  } catch (error) {
    console.log("Error");
  }
};
