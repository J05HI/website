import Vue from 'vue'

export const loadVueScrollTo = () => {
  if (process.client) {
    ;(window as any).onNuxtReady(() => {
      const VueScrollTo = require('vue-scrollto')

      Vue.use(VueScrollTo, {
        offset: -40,
      })
    })
  }
}
