// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { dir: 'rtl', lang: 'ar' },
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'EduTech',
            meta: [
                // <meta name="description" content="My amazing site">
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'description', content: 'Nuxt 3 Starter'},
                { name: 'format-detection', content: 'telephone=no' },
                { name : 'theme-color', content: '#07AEAF'},
            ],
            link: [
                {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap',
                  crossorigin: ''
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css',
                    crossorigin: ''
                  }
              ],
        },
        
        layoutTransition: { name: 'layout', mode: 'out-in' }

    

    },

    css: ['~/assets/scss/style.scss'],

    plugins: [
        {
            
            src: 'plugins/bootstrap.js',
            mode: 'client'
        }
    ],
   /*  components: {global: true, dirs: ['~/components']}, */

    components: [{ path: '~/components', pathPrefix: false,},],
})
