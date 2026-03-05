import axios from "axios";

export const CheckAuth = async () => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_}/api/me`,
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" }
            }
        );

        return { loggedIn: true, user: res.data };
    } catch (err) {
        console.error("error:", err.response?.status);
        return { loggedIn: false };
    }
};