<template>
  <nav
    class="fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900"
    @click="scrollToTop"
  >
    <div class="container mx-auto px-4 lg:px-8 flex-1">
      <div class="flex items-center justify-between h-16">
        <div class="w-1/2 lg:w-1/6 flex items-center" @click.stop="noop">
          <NuxtLink
            :to="localePath('index')"
            class="flex items-center flex-shrink-0"
            aria-label="Julio Marquez Logo"
          >
            <Component
              :is="$isAMP ? 'amp-img' : 'img'"
              :layout="$isAMP ? 'fixed' : undefined"
              :alt="$t('title')"
              :title="$t('title')"
              :src="require('~/assets/images/logo.svg?inline')"
              class="h-8 w-auto rounded"
              width="32"
              height="32"
            />

            <span class="ml-2 text-xl font-medium">Docs</span>
          </NuxtLink>
        </div>
        <div
          class="hidden flex-1 lg:flex justify-center ml-4 mr-2 lg:mx-8 w-4/6"
        >
          <DocsSearchInput v-if="!$isAMP" />
        </div>
        <div class="flex items-center justify-end w-1/6">
          <a
            :href="githubLink"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            name="Github"
            class="hidden lg:block hover:text-gray-500 mr-4"
          >
            <SvgIcon name="github" width="24" height="24" class="w-6 h-6" />
          </a>

          <DarkModeToggle class="hidden lg:block" />

          <button
            class="lg:hidden p-2 rounded-md hover:text-gray-500 focus:outline-none focus:outline-none -mr-2"
            aria-label="Hamburger Menu"
            @click.stop="menu = !menu"
          >
            <SvgIcon
              v-if="menu"
              name="cross"
              width="24"
              height="24"
              class="w-6 h-6"
            />

            <SvgIcon
              v-else
              name="menu"
              width="24"
              height="24"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

import '~/components/icons/menu'
import '~/components/icons/cross'
import '~/components/icons/github'
import '~/components/icons/twitter'

export default Vue.extend({
  computed: {
    menu: {
      get() {
        return this.$store.state.menu.open
      },
      set(val) {
        this.$store.commit('menu/toggle', val)
      },
    },
    githubLink() {
      const { project } = this.$route.params
      return `https://github.com/juliomrqz/${project}`
    },
  },
  methods: {
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return
      }

      window.scrollTo(0, 0)
    },
    noop() {},
  },
})
</script>
