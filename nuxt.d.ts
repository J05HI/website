import { Context } from '@nuxt/types'
import { NuxtRuntimeConfig } from './interfaces'

interface ColorMode {
  preference: 'system' | 'light' | 'dark'
  readonly value: 'system' | 'light' | 'dark'
  unknown?: boolean
}

declare module 'vue/types/vue' {
  interface Vue {
    $config: NuxtRuntimeConfig
    $isAMP?: boolean
    $colorMode: ColorMode
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    amp?: 'only' | 'hybrid' | boolean
    ampLayout?: ((ctx: Context) => string) | string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $isAMP?: boolean
    $colorMode: ColorMode
  }

  interface Context {
    $config: NuxtRuntimeConfig
  }
}
