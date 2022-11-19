import axios from "axios"

const http = axios.create({
    // baseURL: '',
    timeout: 5000,
    responseType: 'json', // default
    headers: {
        'X-Custom-Header': 'foobar'
    }
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default http