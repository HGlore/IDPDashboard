import axios from "axios";
import { API_ENV } from "../utils/API";

export const checkAuth = async () => {
    try {
        const res = await axios.get(
            `${API_ENV.LOCAL_URL}/api/me`,
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

export const Login = async (companyID, password) => {
    try {
        const response = await axios.post(
            `${API_ENV.LOCAL_URL}/api/login`,
            { companyID, password },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) throw error.response.data;
        else if (error.request) throw "No response from server.";
        else throw error.message;
    }
};

export const Logout = async () => {
    try {
        const response = await axios.post(
            `${API_ENV.LOCAL_URL}/api/user-out`,
            {},                     // empty body
            { withCredentials: true }
        );
        return response.data; // "Logged out successfully"
    } catch (error) {
        if (error.response) throw error.response.data;
        else if (error.request) throw "No response from server.";
        else throw error.message;
    }
};
