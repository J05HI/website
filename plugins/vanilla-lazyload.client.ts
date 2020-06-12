/* eslint-disable */
import Vue, { PluginObject } from 'vue'
import { Plugin } from '@nuxt/types'

const LazyLoadPlugin: Plugin = () => {
  return import(
    /* webpackChunkName: 'vanilla-lazyload' */ 'vanilla-lazyload'
  ).then(({ default: LazyLoad }) => {
    const lazyLoadPlugin: PluginObject<any> = {
      install: (Vue) => {
        let lazyLoadInstance: typeof LazyLoad | null = null

        function updateLazy() {
          if (lazyLoadInstance) {
            lazyLoadInstance.update()
          } else {
            lazyLoadInstance = new LazyLoad({
              elements_selector: '.responsive-image .lazy',
              use_native: true,
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
  })
}

export default LazyLoadPlugin
