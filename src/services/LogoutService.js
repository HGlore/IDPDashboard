import axios from "axios";

export const LogoutService = async () => {
    try {
        const response = await axios.post(
            "http://localhost:8080/userout",
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
