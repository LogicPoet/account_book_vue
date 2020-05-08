import request from '@/utils/request'

export function fetchExpendList(data) {
  return request({
    url: '/catharine-accountbook/login',
    method: 'get',
    data
  })
}
