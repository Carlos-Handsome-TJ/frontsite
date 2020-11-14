/**
 * 封状请求接口
 */
import { post, get } from './http'

//封状登录接口
export const apiLogin = params => post('/user/login', params)
//封状用户注册
export const apiRegister = params => post('/user/register', params)
//封状用户名验证接口
export const apiCheckName = params => get('/user/checkName?username=', params)