import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/catharine-user/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/catharine-user/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/catharine-user/user/logout',
    method: 'post'
  })
}
