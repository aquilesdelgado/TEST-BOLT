import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CButton, CButtonGroup } from '@coreui/vue'

const app = createApp(App)
app.component('CButton', CButton)
app.component('CButtonGroup', CButtonGroup)
app.use(i18n)
app.mount('#app')