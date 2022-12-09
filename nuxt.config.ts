// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
    /* supabase: {
        url: 'https://<your-supabase-url>.supabase.co',
        key: '<your-supabase-key>',
        tables: ['users', 'posts'],
    }, */
    alias: {
        './runtimeConfig': './runtimeConfig.browser',
    },
    vite: {
        define: {
            'window.global': {},
        },
    },

    
})
