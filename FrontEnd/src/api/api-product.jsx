import axios from "axios";

export const getAllProduct = async () => {
  const data = await axios.get(`http://34.22.85.44/api/products`);
  return data.data;
};
