import axios from "axios";

export const getUserDataByToken = async () => {
  if (JSON.parse(localStorage.getItem("token"))) {
    const data = await axios.get(
      "http://34.22.85.44:5000/api/users/auth/verifyToken",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    return data.data;
  } else {
    return;
  }
};

export const deleteUserDataByToken = async () => {
  if (JSON.parse(localStorage.getItem("token"))) {
    const data = await axios.delete("http://34.22.85.44:5000/api/users/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return data.data;
  } else {
    return;
  }
};
