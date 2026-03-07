import axios from "axios";
import { API } from "../utils/API";

export const RequestImage = async () => {
    try {
        const response = await axios.post(`${API.LOCAL_URL}/request`,
            {
                withCredentials: true
            }
        );

        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
        
    }
};