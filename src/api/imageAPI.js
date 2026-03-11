import axios from "axios";
import { API_ENV } from "../utils/API";

export const getProfileImage = async () => {
    try {
        const res = await axios.get(`${API_ENV.LOCAL_URL}/api/me/profile-image`, {
            responseType: "blob",
            withCredentials: true,
        });

        if (res.status !== 200) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return {
            success: true,
            imageUrl: URL.createObjectURL(res.data),
        };
    } catch (err) {

        if (axios.isAxiosError(err)) {
            return {
                success: false,
                errorMessage: err.response?.data.message || "An error occurred while fetching the profile image."
            };
        } else {
            return {
                success: false,
                errorMessage: "An unexpected error occurred."
            };
        }
    }
};

export const getEntryImage = async (imagename) => {
    try {
        const response = await axios.get(`${API_ENV.LOCAL_URL}/api/me/entry-image`,
            {
                params: {
                    imageName: imagename
                },
                responseType: "blob",
                withCredentials: true
            });

        return {
            success: true,
            imageUrl: URL.createObjectURL(response.data),
        };

    } catch (err) {
        if (axios.isAxiosError(err)) {
            return {
                success: false,
                errorMessage: err.response?.data.message || "An error occurred while fetching the profile image."
            };
        } else {
            return {
                success: false,
                errorMessage: "An unexpected error occurred."
            };
        }
    }
};
