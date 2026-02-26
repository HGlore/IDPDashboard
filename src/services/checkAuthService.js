import axios from "axios";

export const CheckAuth = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8080/api/me",
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      }
    );

    return { loggedIn: true, user: res.data };
  } catch (err) { 
    console.error("CheckAuth error:", err.response?.status);
    return { loggedIn: false };
  }
};