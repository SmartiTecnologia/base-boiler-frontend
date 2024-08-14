import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { createI18n } from 'vue-i18n'
import en from '@/translation/locales/en.json'
import es from '@/translation/locales/es.json'

const i18n = createI18n({
    locale: 'en', // set locale
    messages : {
        en,
        es,
    }, // set locale messages
    legacy: false,
    })


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n);
app.mount('#app')
