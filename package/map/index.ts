import HoskiMap from "./src/map.vue";
import type {App} from 'vue'

const components = [
    HoskiMap
]

export function install(app: App) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export default {
    install
}

export {
    HoskiMap
}
