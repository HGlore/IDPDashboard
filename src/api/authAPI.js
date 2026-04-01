import { API_ENV } from "../utils/API";
import api from "./api";

export const checkAuth = async () => {
    try {
        const res = await api.get(`api/me`).json();

        if (res.status === "401") return { loggedIn: false };

        return { loggedIn: true, user: res };
    } catch (err) {
        return { loggedIn: false };
    }
};

export const Login = async (companyID, password) => {
    try {
        const response = await api.post(`api/login`,
            {
                json: { companyID, password },
            }
        ).json();
        return response;
    } catch (error) {
        if (error.name === 'HTTPError') {
            const errData = await error.response.json().catch(() => null);
            throw errData || { message: 'Server returned an error.' }
        } else {
            throw { message: error.message || 'Unknown error' }
        }
    }
};

export const Logout = async () => {
    try {
        await api.post(`api/user-out`).text();

        return { success: true }; // "Logged out successfully"
    } catch (error) {
        if (error.response) throw error.response;
        else if (error.request) throw "No response from server.";
        else throw error.message;
    }
};
