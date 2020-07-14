import Vue, { PluginObject } from 'vue'
import { Plugin } from '@nuxt/types'

const LazyLoadPlugin: Plugin = async () => {
  if (
    !(
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    )
  ) {
    await import(
      // @ts-ignore
      /* webpackChunkName: 'intersection-observer' */ 'intersection-observer'
    )
  }

  const { default: LazyLoad } = await import(
    /* webpackChunkName: 'vanilla-lazyload' */ 'vanilla-lazyload'
  )

  const lazyLoadPlugin: PluginObject<any> = {
    install: (Vue) => {
      let lazyLoadInstance: typeof LazyLoad | null = null

      function updateLazy() {
        if (lazyLoadInstance) {
          lazyLoadInstance.update()
        } else {
          lazyLoadInstance = new LazyLoad({
            elements_selector: '.responsive-image .lazy',
          })
        }
      }

      Vue.mixin({
        updated() {
          // @ts-ignore
          this.$nextTick(function () {
            updateLazy()
          })
        },
        mounted() {
          // @ts-ignore
          this.$nextTick(function () {
            updateLazy()
          })
        },
      })
    },
  }

  Vue.use(lazyLoadPlugin)
}

export default LazyLoadPlugin
