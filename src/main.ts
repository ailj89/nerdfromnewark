import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import App from '@/App.vue'
import router from '@/router'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
const pinia = createPinia()

app.use(vuetify).use(pinia).use(router).mount('#app')
