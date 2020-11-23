/**
 * 封状axios请求：
 */
import axios from 'axios'
// 请求超时时间
axios.defaults.timeout = 10000;
axios.defaults.header.post["Content-type"] = "application/json;charset=UTF-8";
//请求拦截器：
axios.interceptors.request.use(config => {
    //本地有token，在请求头中带上token：
    const token = localStorage.getItem('user_token')
    if (token) {
        axios.defaults.headers.common["Authorization"] = token
    } else {
        delete axios.defaults.headers.common["Authorization"]
    }
    return config;
}, error => {

    return Promise.reject(error);
});
//返回拦截器：
axios.interceptors.response.use(response => {

    return response;
}, error => {
    //对403进行重定向：
    return Promise.reject(error);
});

/**
 * 
 * @param {string} url 请求的url地址 
 * @param {obj} params 请求附带的参数
 */

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(e => reject(console.log(e)))
    })
}
/**
 * 
 * @param {string} url 请求的url地址 
 * @param {string} params 请求附带的参数
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(e => reject(console.log(e)))
    })
}