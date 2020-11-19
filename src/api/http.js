/**
 * 封状axios请求：
 */
import axios from 'axios'
// 请求超时时间
axios.defaults.timeout = 10000;
//请求拦截器：

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