import axios from 'axios';
import { message } from 'ant-design-vue';

const service = axios.create({
    baseURL: '/devops',
    timeout: 3000
})

service.interceptors.request.use(
    config => {
        // 请求头设置
        if (config.method === 'post' || config.method === 'patch') {
            config.headers['Content-Type'] = 'application/json';
        }
        // 排除登录页请求
        if (config.method !== 'post' && config.url !== '/login') {
            const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token='));
            if (tokenCookie) {
                config.headers['Authorization'] = tokenCookie.split('=')[1];
            } else {
                window.location.href = '/login';
                return Promise.reject(new Error('Not logged in, please login again'));
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 0) {
            message.error(res.message || '服务异常');
            return Promise.reject(res.message);
        } else {
            message.success(res.message, 1);
            return res;
        }
    },
    error => {
        return Promise.reject(error);
    }
)

export default service;
