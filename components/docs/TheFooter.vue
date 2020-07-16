<template>
  <footer
    class="h-20 w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900"
  >
    <div
      class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between"
    >
      <div class="flex items-center">
        <span class="mr-2 text-sm leading-none"
          >© {{ new Date().getFullYear() }}</span
        >
        <NuxtLink :to="localePath('index')">
          <Component
            :is="$isAMP ? 'amp-img' : 'img'"
            :layout="$isAMP ? 'fixed' : undefined"
            :alt="$t('title')"
            :title="$t('title')"
            :src="require('~/assets/images/logo.svg?inline')"
            class="h-6 w-auto rounded"
            width="24"
            height="24"
          />
        </NuxtLink>
      </div>
      <div class="flex">
        <DocsLangSwitcher class="p-2" />
        <DocsColorSwitcher class="p-2 pr-0" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
