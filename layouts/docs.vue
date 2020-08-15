<template>
  <div class="pt-16">
    <LazyDocsNavbar />

    <main class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <LazyDocsMainNavigation />

        <Nuxt class="w-full lg:w-4/5" />
      </div>
    </main>

    <LazyTheFooter class="border-t dark:border-gray-800" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import DarkModeFromAMPMixin from '@/components/mixins/DarkModeFromAMP'
import { LoadSentry } from '@/components/mixins/LoadSentry'

import '~/components/icons/github'
import '~/components/icons/twitter'

export default Vue.extend({
  mixins: [DarkModeFromAMPMixin, LoadSentry],
  computed: {
    bodyClass() {
      return this.$store.state.menu.open
        ? ['h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto']
        : []
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: [
          // @ts-ignore
          ...this.bodyClass,
          'antialiased font-sans text-gray-900 transition-colors duration-300 ease-linear dark:bg-gray-900 dark:text-gray-300',
        ],
      },
    }
  },
})
</script>
