import axios from "axios";
import { API } from "../utils/API";

export const LoginService = async (companyID, password) => {
    try {
        const response = await axios.post(
            `${API.LOCAL_URL}/login`,
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