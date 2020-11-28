/**
 * 封状请求接口
 */
import { post, get } from './http'

//封状登录接口
export const apiLogin = params => post('/user/login', params)
//封状用户注册
export const apiRegister = params => post('/user/register', params)
//封状用户名验证接口
export const apiCheckName = params => get('/user/checkName', params)
//封装获取验证码接口：
export const apiGetCode = params => get('/user/getCode', params)
//在用户主页获取数据接口：
export const apiGetData = params => get('/list/articles', params)