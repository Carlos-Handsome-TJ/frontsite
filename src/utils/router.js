import Login from '../pages/login/login'
import Register from '../pages/register/register'
import UserList from '../pages/userList/userList.jsx'

const routers = [{
    path: '/',
    key: '/login',
    exact: true,
    strict: false,
    requireAuth: false,
    component: Login
}, {
    path: '/login',
    key: '/login2',
    exact: true,
    strict: true,
    requireAuth: false,
    component: Login
}, {
    path: '/register',
    key: '/register',
    exact: true,
    strict: true,
    requireAuth: false,
    component: Register
}, {
    path: '/userlist',
    key: '/userlist',
    exact: true,
    strict: true,
    permission: ['admin', 'user'],
    requireAuth: true,
    component: UserList
}, {
    path: '*',
    component: '', //404NotFound
    requireAuth: false
}]

export default routers