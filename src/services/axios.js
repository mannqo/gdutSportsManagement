import axios from 'axios'

export default function request(option) {
    return new Promise((resolve, reject) => {
        // 1. 创建axios的实例
        const instance = axios.create({
            baseURL: "http://47.98.190.152:8080",
            timeout: 10000,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        })
        instance.defaults.withCredentials = true;
        instance.defaults.headers.post['Content-Type'] = 'application/json'

        // 拦截器
        instance.interceptors.request.use(config => {
            return config
        }, err => {
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


