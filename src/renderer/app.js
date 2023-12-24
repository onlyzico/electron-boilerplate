import { Icon } from '@iconify/vue'
import { createApp } from 'vue'

import App from './App.vue'
import './app.css'

createApp(App).component('Icon', Icon).mount('#app')
