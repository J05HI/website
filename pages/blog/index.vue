<template>
  <div>
    <section class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-18 lg:px-8">
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h1
            class="text-3xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10 dark:text-gray-100"
          >
            {{ $t('blog.title2') }}
          </h1>
          <p
            class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 dark:text-gray-300 sm:mt-4"
          >
            {{ $t('blog.description') }}
          </p>
        </div>
        <div
          class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
        >
          <BlogArticleCard
            v-for="post in posts"
            :key="post.slug"
            :attributes="post"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import SeoHead from '~/components/mixins/SeoHead'
import { Head, BlogPostContent } from '~/interfaces'

type Posts = Pick<
  BlogPostContent,
  'slug' | 'title' | 'description' | 'published' | 'cover'
>[]

export default Vue.extend({
  mixins: [SeoHead],
  async asyncData({ app, $sentryReady, $content }) {
    let posts: Posts = []

    try {
      posts = await $content('blog', app.i18n.locale)
        .only(['slug', 'title', 'description', 'published', 'cover'])
        .sortBy('created', 'desc')
        .fetch()
    } catch (error) {
      ;(await $sentryReady()).captureException(error)
    }

    return {
      posts,
      head: {
        titleTemplate: '%s - Blog | Julio Marquez',
        title: app.i18n.t('blog.title'),
        description: app.i18n.t('blog.description'),
      } as Head,
    }
  },
})
</script>

<style scoped>
section {
  background-size: 100% 100px;
}
</style>
