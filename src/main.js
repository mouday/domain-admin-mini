import { createSSRApp } from 'vue'
import App from './App.vue'
import { Http } from './api/index.js'
import SingleMessage from './utils/message-util.js'
import { Router } from './utils/router-util.js'

export function createApp() {
  const app = createSSRApp(App)

  app.config.globalProperties.$http = Http
  app.config.globalProperties.$msg = SingleMessage
  app.config.globalProperties.$navigater = Router

  return {
    app,
  }
}
