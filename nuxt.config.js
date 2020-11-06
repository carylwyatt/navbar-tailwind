export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt-tailwind",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { 
        rel: "icon", 
        type: "image/x-icon", 
        href: "/favicon.ico" 
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;700&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/getmenu.server.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'ua-crimson': '#900',
            'ua-white': '#f9f9f9',
            'body-color': '#333',
          },
          fontFamily: {
            'ua-heading': 'Open Sans, sans-serif',
            'ua-body': 'Roboto, sans-serif',
          }
        }
      },
      variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      },
      plugins: [require("tailwindcss-debug-screens")],
      purge: {
        enabled: process.env.NODE_ENV === 'production',
      content: [
          'components/**/*.vue',
          'layouts/**/*.vue',
          'pages/**/*.vue',
          'plugins/**/*.js',
          'nuxt.config.js',
          // TypeScript
          'plugins/**/*.ts',
          'nuxt.config.ts'
        ]
      }
    }
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  fontawesome: {
    //    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
