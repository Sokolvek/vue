import { createApp } from 'vue'
import "./assets/styles/main.css"
import App from './App.vue'
import {createPinia} from 'pinia'

const pinia = createPinia()


const app = createApp(App)

app.use(pinia)
app.mount('#app')
