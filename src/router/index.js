import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('view/Login')
const Home = () => import('view/home/Home')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数， 表示放行
    //       next()  放行   
    //       next('/login')  强制跳转
    if (to.path === '/login') return next();
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')//如果没有token(即token为空) 强制跳转
    next()//如果有token，放行
})

export default router