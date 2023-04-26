import axios from "axios";

export const getAllCategories = async () => {
  const data = await axios.get(`http://34.22.85.44:5000/api/categories`);
  return data.data;
};
