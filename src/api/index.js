import DATA_API from './dataApi.js'

import { getToken } from '../utils/token-util/index.js'
import { asyncRequest } from '../utils/request-util.js'
import { useMock } from '../mock/index.js'

export const VITE_APP_API = import.meta.env.VITE_APP_API

const mock = useMock()

function httpRequest(url) {
  return async function (params = {}, config) {
    const header = {
      'X-Token': getToken(),
    }

    let res = null

    // 使用虚拟数据
    if (import.meta.env.VITE_MODE == 'preview') {
      res = mock[url]
    } else {
      res = await asyncRequest({
        url: VITE_APP_API + url,
        method: 'POST',
        header: header,
        data: params || {},
      })
    }

    if (res && res.code == 0) {
      res.ok = true
    } else {
      res.ok = false

      uni.showToast({
        icon: 'error',
        title: res.msg,
      })
    }

    return res
  }
}

function getHttpRequest() {
  let http = {}

  for (let [key, url] of Object.entries(DATA_API)) {
    // async 作用，避免进入回调地狱
    http[key] = httpRequest(url)
  }

  return http
}

export const Http = getHttpRequest()
