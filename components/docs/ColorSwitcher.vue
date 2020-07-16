<template>
  <Component
    :is="$isAMP ? 'a' : 'button'"
    :href="$isAMP ? toggleAmpLink : undefined"
    :aria-label="$t('actions.toggleDarkMode')"
    class="rounded-md hover:text-green-500 transition ease-in-out duration-150 focus:outline-none"
    @click="setCurrentTheme"
  >
    <SvgIcon
      :name="$colorMode.value === 'light' ? 'sun' : 'moon'"
      width="24"
      height="24"
      class="w-6 h-6"
    />
  </Component>
</template>

<script lang="ts">
import Vue from 'vue'

import '~/components/icons/sun'
import '~/components/icons/moon'

export default Vue.extend({
  computed: {
    toggleAmpLink() {
      const canonicalPath: string = this.$route.fullPath.replace(
        /^\/amp(\/.*)?/,
        '$1'
      )
      const fullPath = canonicalPath === '' ? '/' : canonicalPath

      return `${fullPath}?amp-dark-mode`
    },
  },

  methods: {
    setCurrentTheme() {
      this.$colorMode.value === 'dark'
        ? (this.$colorMode.preference = 'light')
        : (this.$colorMode.preference = 'dark')
    },
  },
})
</script>
