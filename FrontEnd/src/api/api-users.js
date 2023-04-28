import axios from "axios";

export const patchUserId = async (
  password,
  address1,
  address2,
  phoneNumber
) => {
  if (JSON.parse(localStorage.getItem("token"))) {
    const result = await axios.patch("http://34.22.85.44:5000/api/users", {
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      password,
      address1,
      address2,
      phoneNumber,
    });
    return result;
  }
  return;
};
