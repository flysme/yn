import axios from 'axios'

const DEV_URL = 'http://localhost:8890'
const PROD_URL = 'http://103.133.178.195:8890'
const BASE_URL = process.env.NODE_ENV !== 'production' ? DEV_URL : PROD_URL
const http = axios.create({
  baseURL: BASE_URL + '/api/manage',
  timeout: 5000,
  responseType: 'json', // default
  headers: {},
  //   withCredentials: true, // default
})

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  },
)

export default http
