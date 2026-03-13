import axios from "axios";
import { API_ENV } from "../utils/API";

export const entriesData = async ({ ids: ids, id: id, date: date }) => {
    try {
        let response;

        if (id != null) {
            response = await axios.get(
                `${API_ENV.LOCAL_URL}/api/me/entries/${id}/${date}`,
                { withCredentials: true }
            );

        } else {
            response = await axios.post(
                `${API_ENV.LOCAL_URL}/api/me/entries/batch`,
                {
                    ids: ids,
                    date: date
                },
                { withCredentials: true }
            );
        }
        console.log(response.data);

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const entriesStatus = async (date) => {
    try {
        const response = await axios.get(`${API_ENV.LOCAL_URL}/api/me/entries-status`,
            {
                params: {
                    storedDate: date
                },
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            }
        );

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const entriesIds = async () => {
    try {
        const response = await axios.get(
            `${API_ENV.LOCAL_URL}/api/me/ids-entries`,
            {
                withCredentials: true
            }
        );

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};
