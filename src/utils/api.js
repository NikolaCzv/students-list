import axios from "axios"
import { API_URL } from "./constants";

export const publicAPI = axios.create({
    baseURL: API_URL
});