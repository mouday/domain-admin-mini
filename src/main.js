import { createSSRApp } from 'vue'
import App from './App.vue'
import { Http } from './api/index.js'
import SingleMessage from './utils/message-util.js'
import { Router } from './utils/router-util.js'
import { useMock } from './mock/index.js'
import { isMobile } from './utils/client-util.js'

const VITE_MODE = import.meta.env.VITE_MODE

// 使用虚拟数据
if (VITE_MODE == 'preview') {
  useMock()
  // ifndef H5
  if (!isMobile()) {
    window.location.href = '/domain-admin-web'
  }
  // endif
} else {
  // ifndef H5
  if (!isMobile()) {
    window.location.href = '../'
  }
  // endif
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
