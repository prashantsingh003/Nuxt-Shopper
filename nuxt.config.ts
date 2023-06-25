// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title:'Nuxt Shopper',
      meta:[
        {name:'description', content:'Sample Nuxt 3 practice project'}
      ],
      link:[
        {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig:{
    // Key available in server only
    currencyKey:process.env.CURRENCY_API_KEY,
    
    // KEY available in frontend/Browser
    public:{
      currencyKey:process.env.CURRENCY_API_KEY
    }
  }
})
