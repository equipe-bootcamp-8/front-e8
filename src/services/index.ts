import axios from "axios";

const api: any = axios.create({ baseURL: "https://cloudwalk-backend.onrender.com" });

export default api;