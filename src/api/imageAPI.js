import { API_ENV } from "../utils/API";
import api from "./api";

export const getProfileImage = async () => {
    try {
        const res = await api.get(`api/me/profile-image`).blob();

        return {
            success: true,
            imageUrl: URL.createObjectURL(res),
        };
    } catch (err) {

        if (err.name === 'HTTPError') {
            return {
                success: false,
                errorMessage: "An error occurred while fetching the profile image."
            };
        } else {
            return {
                success: false,
                errorMessage: "An unexpected error occurred."
            };
        }
    }
};

export const getEntryImage = async (imageName) => {
    try {
        const response = await api.get(`api/me/entry-image`,
            {
                searchParams: { imageName }
            }).blob();

        return {
            success: true,
            imageUrl: URL.createObjectURL(response),
        };

    } catch (err) {
        if (err.name === "HTTPError") {
            return {
                success: false,
                errorMessage: err.response?.message || "An error occurred while fetching the profile image."
            };
        } else {
            return {
                success: false,
                errorMessage: "An unexpected error occurred."
            };
        }
    }
};
