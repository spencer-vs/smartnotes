import axios from "axios"


const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
})

console.log("API URL:", import.meta.env.VITE_API_URL)

api.interceptors.request.use((config) =>
{
    const token = localStorage.getItem("access");
    console.log("Sending token:", token);
    if (token
        && !config.url.includes("auth/register")
        && !config.url.includes("auth/token")
    ) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => Promise.reject(error)
);
export default api