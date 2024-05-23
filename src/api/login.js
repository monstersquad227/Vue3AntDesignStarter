import request from '@/utils/request'

// 登录
export function postLogin(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
