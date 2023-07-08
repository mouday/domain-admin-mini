import { createSSRApp } from 'vue'
import App from './App.vue'
import { Http } from './api/index.js'
import SingleMessage from './utils/message-util.js'
import { Router } from './utils/router-util.js'
import { useMock } from './mock/index.js'

const VITE_MODE = import.meta.env.VITE_MODE

// 使用虚拟数据
if (VITE_MODE == 'preview') {
  useMock()
}

export function createApp() {
  const app = createSSRApp(App)

  app.config.globalProperties.$http = Http
  app.config.globalProperties.$msg = SingleMessage
  app.config.globalProperties.$navigater = Router

  return {
    app,
  }
}
