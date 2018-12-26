/*
 * 接口
 * */
import axios from 'axios'

/*
 * 微信
 */
const request = axios.create({
  withCredentials: false,
  baseURL: '/api',
  // baseURL: process.env.API_DOMAIN,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})

// Add a request interceptor
request.interceptors.request.use(request => {
  // Do something before request is sent
  return request
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(response => {
  // Do something with response data
  return response.data
}, (error) => {
  // Do something with response error
  return Promise.reject(error)
})

export default request
