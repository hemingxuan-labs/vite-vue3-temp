import { createApp } from 'vue'
import router from '@/router/index.js'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/scss/style.scss'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
