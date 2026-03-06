import axios from "axios";
import { API } from "../utils/API";

export const ImagesCountStatus = async (date, userData) => {
    try {
        const response = await axios.post(`${API.LOCAL_URL}/images`,
            { storedDate: date, user: userData }, // JSON body
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        throw error.message;
    }
};
