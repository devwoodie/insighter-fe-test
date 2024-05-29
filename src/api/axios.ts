import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:3001/`,
    timeout: 1000,
})

instance.interceptors.request.use(
    async (config) => {

        config.headers["Content-Type"] = "application/json"
        config.withCredentials = true;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
)

export default instance;