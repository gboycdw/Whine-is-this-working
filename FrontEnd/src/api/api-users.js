import axios from "axios";

export const patchUserId = async (
  password,
  address1,
  address2,
  phoneNumber
) => {
  console.log(password, address1, address2, phoneNumber);
  const result = await axios.patch("http://34.22.85.44:5000/api/users", {
    password,
    address1,
    address2,
    phoneNumber,
  });
  return result;
};
