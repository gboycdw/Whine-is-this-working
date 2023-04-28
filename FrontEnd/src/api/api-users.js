import axios from "axios";

export const patchUserId = async (
  password,
  address1,
  address2,
  postalCode,
  phoneNumber
) => {
  if (JSON.parse(localStorage.getItem("token"))) {
    const result = await axios.patch("http://34.22.85.44:5000/api/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      password,
      address1,
      address2,
      postalCode,
      phoneNumber,
    });
    return result;
  }
  return;
};
