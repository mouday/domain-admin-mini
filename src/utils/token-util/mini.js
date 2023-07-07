/**
 * token 管理
 * src/utils/token-util.js
 */

const TOKEN_KEY = 'token'

export function getToken() {
  return uni.getStorageSync(TOKEN_KEY)
}

export function setToken(value) {
  return uni.setStorageSync(TOKEN_KEY, value)
}

export function removeToken() {
  return uni.removeStorageSync(TOKEN_KEY)
}
