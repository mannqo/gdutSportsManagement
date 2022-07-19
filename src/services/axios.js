import axios from 'axios'
import { baseURL } from '../config';


export default function request(option) {
    return new Promise((resolve, reject) => {
        // 1. 创建axios的实例
        const instance = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Expose-Headers": "fileName"
            }
        })
        // instance.headers.post['token'] = localStorage.getItem('token');
        instance.defaults.withCredentials = true;  // 携带cookie
        instance.defaults.headers.post['Content-Type'] = 'application/json'

        // 拦截器
        instance.interceptors.request.use(config => {
            if (localStorage.getItem('token')) {
                const token = localStorage.getItem('token');
                config.headers['token'] = `${token}`
            } else {
                delete config.headers[`token`];
            }
            return config;
        }, err => {
            console.log(err, '请求拦截');
            return err
        })
        instance.interceptors.response.use(response => {
            return response.data
        }, err => {
            // console.log('response err', err);
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '请求错误'
                        break
                    case 401:
                        err.message = '未授权的访问'
                        break
                    default:
                        err.message = "其他错误信息"
                }
            }
            return err
        })
        // 传入对象进行网络请求
        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}


