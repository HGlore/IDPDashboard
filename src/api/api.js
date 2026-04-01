import ky from "ky";
import { API_ENV } from "../utils/API";

const api = ky.create({
    prefixUrl: API_ENV.LOCAL_URL,
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;