import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en' // Default language, will be updated dynamically
      },
      title: 'York Consulting',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Expert legal representation for criminal defense, DUI, traffic violations, and more.' 
        },
        {
          name: 'keywords',
          content: 'criminal defense, DUI lawyer, traffic violations, impaired driving, domestic violence, assault defense, fraud cases, dangerous driving, legal services Toronto'
        },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Theme colors for mobile browsers
        { name: 'theme-color', content: '#1e40af' },
        { name: 'msapplication-TileColor', content: '#1e40af' },
        
        // Open Graph / Social Media
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'York Consulting - Professional Legal Services' },
        { property: 'og:description', content: 'Expert legal representation for criminal defense, DUI, traffic violations, and more.' },
        { property: 'og:image', content: '/og-image.png' },
        
        // Open Graph Locale
        { property: 'og:locale', content: 'en_CA' },
        { property: 'og:locale:alternate', content: 'zh_CN' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'York Consulting - Professional Legal Services' },
        { name: 'twitter:description', content: 'Expert legal representation for criminal defense, DUI, traffic violations, and more.' },
      ],
      link:[
        {
          rel: 'icon', href: '/images/favicon.png', type: 'image/png', 
        }
      ],
      script: [
        // Google tag (gtag.js)
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-B3F8LWQB1Q'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B3F8LWQB1Q');
          `
        }
      ]
    }
  }
})