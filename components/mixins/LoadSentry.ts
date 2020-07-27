import Vue from 'vue'

export const LoadSentry = Vue.extend({
  data: () => ({
    errorListener: null as (() => void) | null,
  }),

  mounted() {
    this.idleLoadSentry()
    this.registerWindowErrorListener()
  },

  destroyed() {
    if (this.errorListener) {
      window.removeEventListener('error', this.errorListener)
    }
  },

  methods: {
    registerWindowErrorListener() {
      this.errorListener = () => {
        this.$sentryLoad()

        if (this.errorListener) {
          window.removeEventListener('error', this.errorListener)
        }
      }

      window.addEventListener('error', this.errorListener)
    },

    idleLoadSentry() {
      // If `requestIdleCallback()` or `requestAnimationFrame()`
      // is not supported, resolve immediately.
      if (
        !('requestIdleCallback' in window) ||
        !('requestAnimationFrame' in window)
      ) {
        this.$sentryLoad()
        return
      }

      const id = window.requestIdleCallback(
        () => {
          this.$sentryLoad().then(() => cancelIdleCallback(id))
        },
        { timeout: 2000 }
      )
    },
  },
})
