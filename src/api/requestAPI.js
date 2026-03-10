import axios from "axios";
import { API_ENV } from "../utils/API";

export const assignEntries = async () => {
    try {
        const response = await axios.post(`${API_ENV.LOCAL_URL}/api/me/assignments`,
            {
                withCredentials: true
            }
        );

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const ongoingEntries = async () => {
    try {
        const response = await axios.get(`${API_ENV.LOCAL_URL}/api/me/ongoing`,
            {
                withCredentials: true
            }
        );

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);

    }
};

