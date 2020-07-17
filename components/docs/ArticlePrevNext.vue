<template>
  <div class="flex justify-between items-center">
    <NuxtLink
      v-if="prev"
      :to="toLink(prev.slug)"
      exact
      class="flex items-center p-2 pl-0 text-gray-500 font-bold hover:text-gray-700 hover:underline dark-hover:text-gray-400"
    >
      <SvgIcon name="arrow-left" width="20" height="20" class="w-4 h-4 mr-1" />
      {{ prev.title }}
    </NuxtLink>

    <span v-else>&nbsp;</span>

    <NuxtLink
      v-if="next"
      :to="toLink(next.slug)"
      exact
      class="flex items-center p-2 pr-0 text-gray-500 font-bold hover:text-gray-700 hover:underline dark-hover:text-gray-400"
    >
      {{ next.title }}
      <SvgIcon name="arrow-right" width="20" height="20" class="w-4 h-4 ml-1" />
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import '~/components/icons/arrow-left'
import '~/components/icons/arrow-right'

export default Vue.extend({
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    toLink(slug: string) {
      const { project } = this.$route.params

      if (slug === 'index' || slug.toLowerCase() === 'readme') {
        return this.localePath({
          name: 'docs-project-slug',
          params: { project },
        })
      }

      return this.localePath({
        name: 'docs-project-slug',
        params: { slug, project },
      })
    },
  },
})
</script>
