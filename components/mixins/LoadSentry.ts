import Vue from 'vue'

interface ExtendedPromise<T> extends Promise<T> {
  _resolve: () => void
}

export function resolvableComponentFactory(cb: Function) {
  let resolve: (value?: Function) => void

  // eslint-disable-next-line promise/param-names
  const promise = new Promise<Function>((newResolve) => {
    resolve = newResolve
  }) as ExtendedPromise<Function>

  // eslint-disable-next-line no-underscore-dangle
  promise._resolve = () => {
    resolve(cb())
  }

  return promise
}

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
      const resolvableComponent = resolvableComponentFactory(() => {
        this.$sentryLoad()
      })

      // If `requestIdleCallback()` or `requestAnimationFrame()`
      // is not supported, resolve immediately.
      if (
        !(`requestIdleCallback` in window) ||
        !(`requestAnimationFrame` in window)
      ) {
        // eslint-disable-next-line no-underscore-dangle
        resolvableComponent._resolve()
        return
      }

      const id = window.requestIdleCallback(
        () => {
          // eslint-disable-next-line no-underscore-dangle
          requestAnimationFrame(resolvableComponent._resolve)
        },
        { timeout: 2000 }
      )

      const cleanup = () => cancelIdleCallback(id)

      resolvableComponent.then(cleanup)
    },
  },
})
