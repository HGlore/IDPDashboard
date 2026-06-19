import { API_ENV } from "../utils/API";
import * as api from "./api";

export const assignEntries = async () => {
    try {
        const response = await api.jsonAPI.post(`api/me/assignments`).json();
        return response;
    } catch (error) {
        throw new Error(error.response?.message || error.message);
    }
};

export const ongoingEntries = async () => {
    try {
        const response = await api.jsonAPI.get(`api/me/ongoing`).json();

        return response;
    } catch (error) {
        throw new Error(error.response?.message || error.message);

    }
};

