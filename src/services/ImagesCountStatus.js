import axios from "axios";

export const ImagesCountStatus = async (date) => {
    try {
        const response = await axios.get("http://localhost:8080/getImages", {
            params: { storedDate: date }, // send query param
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        if (error.response) throw error.response.data;
        else if (error.request) throw "No response from server.";
        else throw error.message;
    }
};
