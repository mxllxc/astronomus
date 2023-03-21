import axios from "axios";

const apiProducts = axios.create({
  baseURL: `${process.env.REACT_APP_API}/`,
});

export const getProducts = () => {
  try {
    return apiProducts.get<any[]>('products'
    );
  } catch (error) {
    console.log("Error");
  }
};