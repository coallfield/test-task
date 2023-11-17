

import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store/store.js'
import components from '@/components/UI/library.js'
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


app.use(store)
app.mount('#app')
