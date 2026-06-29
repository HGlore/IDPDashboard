import { API_ENV } from "../utils/API";
import * as api from "./api";

export const checkAuth = async () => {
    try {
        const res = await api.jsonAPI.get(`api/me`).json();

        if (res.status === "401") return { loggedIn: false };

        return { loggedIn: true, user: res };
    } catch (err) {
        return { loggedIn: false };
    }
};

export const Register = async (fullName, companyID, password, role, regKey, pickedProfile) => {
    const formData = new FormData();

    formData.append("fullName", fullName);
    formData.append("companyID", companyID);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("regKey", regKey);
    formData.append("profileImage", pickedProfile);
    
    try {
        const response = await api.noContentAPI.post(`api/register`,
            {
                body: formData
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

export const Login = async (companyID, password) => {
    try {
        const response = await api.jsonAPI.post(`api/login`,
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
        await api.jsonAPI.post(`api/user-out`).text();

        return { success: true }; // "Logged out successfully"
    } catch (error) {
        if (error.response) throw error.response;
        else if (error.request) throw "No response from server.";
        else throw error.message;
    }
};
