import axios from "axios";
import { API } from "../utils/API";

export const getProfileImage = async () => {
    try {
        const res = await axios.get(`${API.LOCAL_URL}/api/profile/image`, {
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
        /* console.error("error:", err); */

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