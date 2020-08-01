<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <NuxtLink
        :to="
          localePath({ name: 'blog-slug', params: { slug: attributes.slug } })
        "
      >
        <ImageResponsive
          :src-set="
            require(`~/assets/images/content/${attributes.cover}?resize&sizes[]=420&sizes[]=840`)
          "
          :src-set-webp="
            require(`~/assets/images/content/${attributes.cover}?resize&sizes[]=420&sizes[]=840&format=webp`)
          "
          :width="420"
          :height="221"
          :alt="attributes.title"
          classes="h-48 w-full object-cover"
        />
      </NuxtLink>
    </div>
    <div
      class="flex-1 bg-white p-6 flex flex-col justify-between dark:bg-gray-800"
    >
      <div class="flex-1">
        <NuxtLink
          :to="
            localePath({ name: 'blog-slug', params: { slug: attributes.slug } })
          "
          class="block"
        >
          <h3
            class="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-gray-100"
          >
            {{ attributes.title }}
          </h3>

          <!-- eslint-disable vue/no-v-html -->
          <p
            class="mt-3 text-base leading-6 text-gray-500 dark:text-gray-300"
            v-html="attributes.description"
          />
        </NuxtLink>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex text-sm leading-5 text-gray-500 dark:text-gray-300">
          <time :datetime="attributes.publishedAt">{{
            formattedPublishedAt
          }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { formatDate } from '~/utils/date'

export default Vue.extend({
  props: {
    attributes: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data: () => ({ formattedPublishedAt: '' }),

  async created() {
    this.formattedPublishedAt = await formatDate(
      this.attributes.publishedAt,
      this.$i18n.locale
    )
  },
})
</script>
