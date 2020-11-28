import Login from '../pages/login/login'
import Register from '../pages/register/register'
import UserList from '../pages/userList/userList.jsx'
import { Result } from "antd"
import Recommend from '../components/recommend'
import News from '../components/news'
import Hot from '../components/hot'

export const withoutAuthRouters = [{
    path: "/login",
    key: "login",
    exact: true,
    strict: true,
    requireAuth: false,
    component: Login
}, {
    path: "/register",
    key: "register",
    exact: true,
    strict: true,
    requireAuth: false,
    component: Register
}, {
    path: '*',
    key: "404",
    requireAuth: false,
    component: <Result status="warning"
        title="There are some problems with your operation." />
}]

export const needAuthRouters = [{
    path: "/userList",
    key: 'userList',
    exact: true,
    permission: ['admin', 'user'],
    requireAuth: true,
    component: UserList
}]

export const homeRouters = [{
    path: "/userList/recommend",
    key: "recommend",
    title: "为您推荐",
    exact: true,
    strict: true,
    permission: ["admin", "user"],
    requireAuth: true,
    component: Recommend
}, {
    path: "/userList/hot",
    key: "hot",
    title: "热门",
    exact: true,
    strict: true,
    permission: ["admin", "user"],
    requireAuth: true,
    component: Hot
}, {
    path: "/userList/news",
    key: "news",
    title: "新闻",
    exact: true,
    strict: true,
    permission: ["admin", "user"],
    requireAuth: true,
    component: News
}, {
    path: "/userList/sports",
    key: "sports",
    title: "体育",
    exact: true,
    strict: true,
    permission: ["admin", "user"],
    requireAuth: true,
    component: Hot
}, {
    path: "/userList/amusement",
    key: "amusement",
    title: "娱乐",
    exact: true,
    strict: true,
    permission: ["admin", "user"],
    requireAuth: true,
    component: Hot
}, {
    path: "/userList/trend",
    key: "trend",
    title: "趋势",
    exact: true,
    strict: true,
    permission: ["admin", "user"],
    requireAuth: true,
    component: Hot
}]