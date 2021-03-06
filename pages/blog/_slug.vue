<template>
  <article
    class="mx-auto max-w-3xl pt-16 pb-10 px-5 md:px-0 lg:pt-24"
    itemscope
    itemtype="http://schema.org/BlogPosting"
  >
    <div v-if="head && post">
      <meta itemprop="dateCreated" :content="head.createdAt" />
      <meta itemprop="datePublished" :content="head.publishedAt" />
      <meta itemprop="dateModified" :content="head.updatedAt" />
      <meta itemprop="description" :content="post.description" />
      <meta itemprop="timeRequired" :content="`PT${post.readingTime}M`" />
      <meta itemprop="inLanguage" :content="$i18n.locale" />
      <meta
        itemprop="mainEntityOfPage"
        :content="`https://marquez.co${localePath({
          name: 'blog-slug',
          params: { slug: post.slug },
        })}`"
      />

      <div itemscope itemprop="image" itemtype="http://schema.org/ImageObject">
        <meta
          itemprop="url"
          :content="require(`~/assets/images/content/${post.cover}`)"
        />
        <meta itemprop="width" content="1200px" />
        <meta itemprop="height" content="630px" />
      </div>
      <div itemscope itemprop="author" itemtype="http://schema.org/Person">
        <meta itemprop="name" content="Julio Márquez" />
      </div>
      <meta itemprop="copyrightYear" :content="new Date().getFullYear()" />
      <div
        v-for="prop in ['publisher', 'copyrightHolder', 'contributor']"
        :key="prop"
        itemscope
        :itemprop="prop"
        itemtype="http://schema.org/Organization"
      >
        <meta itemprop="legalName" content="Julio Márquez" />
        <meta itemprop="name" content="Julio Márquez" />
        <meta itemprop="url" content="https://marquez.co" />
        <div itemscope itemprop="logo" itemtype="http://schema.org/ImageObject">
          <meta
            itemprop="url"
            content="https://mauferzone.com/static/icon.png"
          />
          <meta itemprop="width" content="512px" />
          <meta itemprop="height" content="512px" />
        </div>
      </div>
    </div>

    <div v-if="post">
      <div class="pb-4">
        <time
          :datetime="post.publishedAt"
          class="block mb-2 text-base leading-6 font-medium text-gray-600 dark:text-gray-300"
        >
          {{ formattedPublishedAt }}
        </time>
        <h1
          itemprop="name headline"
          class="text-3xl leading-9 font-extrabold text-gray-900 mb-8 tracking-tight sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100"
        >
          {{ post.title }}
        </h1>

        <div class="flex flex-wrap">
          <div class="flex items-center pr-5 mr-5 mb-4">
            <ImageResponsive
              :width="48"
              :height="48"
              :rounded="true"
              :fluid="false"
              :src-set="
                require('~/assets/images/profile.jpg?resize&sizes[]=48&sizes[]=96')
              "
              :src-set-webp="
                require('~/assets/images/profile.jpg?resize&sizes[]=48&sizes[]=96&format=webp')
              "
              amp-layout="fixed"
              alt="Julio Márquez"
              classes="w-12 h-12 border border-gray-300"
            />
            <div class="flex flex-col leading-tight ml-3">
              <span class="font-medium dark:text-gray-100">Julio Márquez</span>
              <a
                href="https://github.com/juliomrqz"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-gray-700 dark:text-gray-300 dark-hover:text-gray-200"
              >
                @juliomrqz
              </a>
            </div>
          </div>
        </div>
      </div>

      <div itemprop="description" class="text-xl mb-8 mt-4">
        {{ post.description }}
      </div>

      <div class="-mx-6 mb-8 md:mx-0">
        <ImageResponsive
          :src-set="
            require(`~/assets/images/content/${post.cover}?resize&sizes[]=400&sizes[]=800&sizes[]=1600`)
          "
          :src-set-webp="
            require(`~/assets/images/content/${post.cover}?resize&sizes[]=400&sizes[]=800&sizes[]=1600&format=webp`)
          "
          :width="1200 / 1.5"
          :height="630 / 1.5"
          :alt="post.title"
          class="md:shadow-lg md:rounded-lg"
          classes="w-full md:rounded-lg"
        />
      </div>

      <div class="max-w-none prose prose-lg dark:prose-dark-mode">
        <NuxtContent :document="post" itemprop="articleBody" />
      </div>

      <aside
        v-if="post.canonical"
        class="mb-12 mt-8 py-4 border-t border-grey-600 text-base"
      >
        {{ $t('blog.publishedAt') }}

        <a
          :href="`${post.canonical}?ref=marquez-blog`"
          target="_blank"
          rel="noopener noreferrer"
          class="underline text-blue-600 dark:text-blue-400"
          >{{ getDomain(post.canonical) }}</a
        >

        {{ $t('blog.on') }} {{ formattedCreatedAt }}.
      </aside>
    </div>

    <div
      class="mt-12 border-t border-dashed border-gray-400 rounded-lg dark:border-gray-200"
    />

    <div
      class="my-12 text-center md:text-left md:flex md:items-start md:justify-between"
    >
      <div>
        <ImageResponsive
          :width="96"
          :height="96"
          :rounded="true"
          :src-set="
            require('~/assets/images/profile.jpg?resize&sizes[]=96&&sizes[]=192')
          "
          :src-set-webp="
            require('~/assets/images/profile.jpg?resize&sizes[]=96&&sizes[]=192&format=webp')
          "
          amp-layout="fixed"
          alt="Julio Márquez"
          class="w-24 h-24 mx-auto"
          classes="w-24 h-24 border border-gray-300"
        />
      </div>
      <div class="mt-4 flex flex-col md:mt-0 md:ml-4">
        <div class="md:pl-4">
          <!-- eslint-disable vue/no-v-html -->
          <div class="text-lg" v-html="$t('blog.aboutMe')" />

          <NuxtLink
            :to="localePath('about')"
            class="mt-4 block font-medium text-gray-700 hover:underline hover:text-gray-800 dark:text-gray-200 dark-hover:text-gray-100"
          >
            {{ $t('links.more') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Url from 'url-parse'
import isAlphanumeric from 'validator/lib/isAlphanumeric'

import SeoHead from '~/components/mixins/SeoHead'
import { formatDate } from '~/utils/date'

import { BlogPostContent, Head } from '~/interfaces'

interface Data {
  html: string
  attributes: { [key: string]: any }
  head: MetaInfo
  formattedPublishedAt: string
  formattedCreatedAt: string
}

export default Vue.extend({
  mixins: [SeoHead],
  async asyncData({ app, params, $sentryReady, $content, $config }) {
    try {
      const { slug } = params
      const post = await $content('blog', app.i18n.locale, slug).fetch<
        BlogPostContent
      >()

      const title = `${post.title} - Blog`
      const {
        description,
        canonical,
        createdAt,
        updatedAt,
        publishedAt,
        // wordCount,
        noindex,
      } = post

      const postUrl = app.localePath({ name: 'blog-slug', params: { slug } })
      const postAbsoluteUrl = `${$config.baseHost}${postUrl}`

      const image = require(`~/assets/images/content/${post.cover}`)

      const formattedPublishedAt = formatDate(post.publishedAt, app.i18n.locale)
      const formattedCreatedAt = formatDate(post.createdAt, app.i18n.locale)

      return {
        post,
        formattedPublishedAt,
        formattedCreatedAt,
        head: {
          image,
          title,
          description,
          canonical,
          createdAt: new Date(createdAt).toISOString(),
          updatedAt: new Date(updatedAt).toISOString(),
          publishedAt: new Date(publishedAt).toISOString(),
          noindex,
          extraScripts: [
            {
              innerHTML: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                      '@id': $config.baseHost,
                      name: 'Home',
                    },
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    item: {
                      '@id': `${$config.baseHost}/blog`,
                      name: 'Blog',
                    },
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    item: {
                      '@id': postAbsoluteUrl,
                      name: title,
                    },
                  },
                ],
              }),
              type: 'application/ld+json',
            },
          ],
        } as Head,
      }
    } catch (error) {
      ;(await $sentryReady()).captureException(error)

      return false
    }
  },
  data: () => ({
    attributes: null,
  }),
  methods: {
    getDomain(url: string) {
      const result = Url(url)
      return result.hostname
    },
  },
  validate({ params }) {
    return isAlphanumeric(params.slug.replace(/-/g, ''))
  },
})
</script>

<style>
@import 'katex/dist/katex.css';
</style>
