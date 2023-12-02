// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_URL
        }
    },
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
                }
              ],
        },
        
    layoutTransition: { name: 'layout', mode: 'out-in' }

    },
    ssr: process.env.NODE_ENV !== "development",

    css: ['~/assets/scss/style.scss', '~/assets/css/dashboard.css'],

    plugins: [

        {
            
            src: 'plugins/bootstrap.js',
            mode: 'client'
        }
    ],
   /*  components: {global: true, dirs: ['~/components']}, */

    components: [{ path: '~/components', pathPrefix: false,},],

    modules: [
        '@nuxtjs/i18n',
    ],

/*     i18n: {
        vueI18n: "~/plugins/i18n.config.ts",
      }, */

/*     i18n: {
        strategy: 'no_prefix',
        vueI18n: {
            legacy: false,
            locale: 'en',
        },
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en-US.json',
                dir: 'ltr',
                icon: 'flag-en.svg'
              },
            {
                code: 'ar',
                iso: 'ar-AR',
                name: 'AR',
                file: 'ar-EG.json',
                dir: 'rtl',
                icon: 'flag-ar.svg'
              },
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true
          },
    } */
})
