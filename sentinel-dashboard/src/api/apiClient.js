import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.code === 'ENCONNABORTED' && error.message.includes('timeout')){
            return Promise.reject(new Error('Request Time Out'));

        }
        return Promise.reject(error);
    }
)

export default apiClient;