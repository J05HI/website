import Vue, { PluginObject } from 'vue'
import { Plugin } from '@nuxt/types'

import { loadIntersectionObserver } from '~/utils/intersection-observer'

const LazyLoadPlugin: Plugin = async () => {
  await loadIntersectionObserver()

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
