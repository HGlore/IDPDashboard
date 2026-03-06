import axios from "axios";
import { API } from "../utils/API";

export const CheckAuth = async () => {
    try {
        const res = await axios.get(
            `${API.LOCAL_URL}/api/me`,
            {
                withCredentials: true
            }
        );

        return { loggedIn: true, user: res.data };
    } catch (err) {
        /* console.error("error:", err.response?.status); */
        return { loggedIn: false };
    }
};