import ky from "ky";
import { API_ENV } from "../utils/API";

export const jsonAPI = ky.create({
    prefixUrl: API_ENV.BASE_URL,
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    }
});

export const noContentAPI = ky.create({
    prefixUrl: API_ENV.BASE_URL,
    credentials: 'include'
});