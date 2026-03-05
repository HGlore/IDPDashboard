import axios from "axios";

export const LoginService = async (companyID, password) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/login`,
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