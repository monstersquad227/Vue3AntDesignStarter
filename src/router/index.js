import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: 'home',
            icon: 'UserOutlined',
            requiresAuth: true,
        }
    },
    {
        path: '/test',
        component: () => import('@/views/Test.vue'),
        meta: {
            title: 'Test',
            icon: 'BarChartOutlined',
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/404.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = 'Vue3AntDesignStarter'
    const isLoggedIn = !!localStorage.getItem('user');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLoggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }, // 登录成功后重定向回原页面
            });
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router;
