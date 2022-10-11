import axios from "axios";

const api: any = axios.create({ baseURL: "http://localhost:3333" });

export default api;