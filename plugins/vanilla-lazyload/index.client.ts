import Vue, { PluginObject } from 'vue'
import { Plugin } from '@nuxt/types'

import { Lazyload } from './lazyload'

const LazyLoadPlugin: Plugin = async ({ isDev }) => {
  const lazy = new Lazyload(isDev)
  await lazy.init()

  const lazyLoadPlugin: PluginObject<any> = {
    install: () => {
      Vue.mixin({
        updated() {
          Vue.nextTick(() => {
            lazy.update()
          })
        },
        mounted() {
          Vue.nextTick(() => {
            lazy.update()
          })
        },
      })
    },
  }

  Vue.use(lazyLoadPlugin)
}

export default LazyLoadPlugin
