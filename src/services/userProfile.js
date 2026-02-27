import axios from "axios";

export const getProfileImage = async () => {
    try {
        const res = await axios.get(
            "http://localhost:8080/api/profile/image",
            {
                responseType: "blob",
                withCredentials: true,
            }
        );

        return {
            success: true,
            imageUrl: URL.createObjectURL(res.data),
        };
    } catch (err) {
        console.error("GetProfileImage error:", err.response?.status);
        return {success: false};
    }
};