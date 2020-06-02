import request from './request'

export function loginFormSub(data) {
  return request({
      url:'/login',
      method:'post',
      data
  })
}