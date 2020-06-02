import axios from 'axios'

export default function request(config) {
  const instance = axios.create({
        baseURL:'http://127.0.0.1:8888/api/private/v1',
        timeout:5000
    })

    instance.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      instance.interceptors.response.use(function (res) {
        // Do something before request is sent
        return res;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      return instance(config)
}