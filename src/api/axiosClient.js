import axios from "axios";

let accessToken = localStorage.getItem('token')
const axiosClient = axios.create({
    
    baseURL: 'https://hinosoft.com/api',
    headers: {
        accessToken
    }
})


// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClient