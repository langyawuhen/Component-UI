import {createApp} from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {HoskiVideo, HoskiMap} from "../package/index";

const app = createApp(App)
app.use(ElementPlus).use(HoskiVideo).use(HoskiMap)
app.mount('#app')
