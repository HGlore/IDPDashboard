import { API_ENV } from "../utils/API";
import api from "./api";

export const assignEntries = async () => {
    try {
        const response = await api.post(`api/me/assignments`).json();

        return response;
    } catch (error) {
        throw new Error(error.response?.message || error.message);
    }
};

export const ongoingEntries = async () => {
    try {
        const response = await api.get(`api/me/ongoing`).json();

        return response;
    } catch (error) {
        throw new Error(error.response?.message || error.message);

    }
};

