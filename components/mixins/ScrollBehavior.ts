import Vue from 'vue'

export default Vue.extend({
  async mounted() {
    if (!('scrollBehavior' in document.documentElement.style)) {
      await import(
        /* webpackChunkName: 'smoothscroll-polyfill' */ '@/utils/polyfill/smoothscroll'
      )
    }
  },

  methods: {
    scrollTo(target: string) {
      document.querySelector(target)?.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
})
