// import HoskiVideo from './src/video.vue'
// import type {App} from 'vue'
//
// const components = [
//     HoskiVideo
// ]
//
// export function install(app: App) {
//     components.forEach(component => {
//         app.component(component.name!, component)
//     })
// }
//
// export default {
//     install
// }
//
// export {
//     HoskiVideo
// }

import Video from "./src/video.vue"
import { withInstall } from "../withInstall"

const HoskiVideo = withInstall(Video)
export default HoskiVideo
