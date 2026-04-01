import { API_ENV } from "../utils/API";
import * as DateFormatter from "../utils/DateFormatter";
import api from "./api";

export const entriesData = async ({ ids: ids, id: id, date: date }) => {
    const formattedDate = DateFormatter.inDashFormat(date);

    try {
        let response;

        if (id != null) {
            response = await api.get(
                `api/me/entries/${id}`,
                {
                    searchParams: {
                        date: formattedDate
                    }
                }
            ).json();

        } else {
            response = await api.post(
                `api/me/entries/batch`,
                {
                    json: {
                        ids: ids,
                        date: formattedDate
                    }
                }
            ).json();
        }

        return response;
    } catch (error) {
        throw new Error(error.response?.message || error.message);
    }
};

export const entriesStatus = async (date) => {
    const formattedDate = DateFormatter.inDashFormat(date);

    try {
        const response = await api.get(`api/me/entries-status`,
            {
                searchParams: {
                    storedDate: formattedDate
                }
            }
        ).json();

        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const entriesIds = async () => {
    try {
        const response = await api.get(`api/me/ids-entries`).json();

        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const saveEntry = async (entry, production, ids, updateTo) => {
    try {
        await api.post(`api/me/entries`,
            {
                json: {
                    documentDTO: entry,
                    productionDTO: production,
                    ids: ids,
                    updateTo: updateTo
                }
            }
        ).json();

        if (updateTo == "BILLED") { window.location.reload(); }

        return { success: true }
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};
