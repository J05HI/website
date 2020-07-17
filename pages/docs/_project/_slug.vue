<template>
  <div class="flex flex-wrap-reverse">
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r"
      :class="{ '': doc.toc && doc.toc.length, 'lg:w-3/4': !doc.fullscreen }"
    >
      <article
        :class="{
          'prose-dark': $colorMode.preference === 'dark',
        }"
        class="prose prose lg:prose-lg lg:px-8"
      >
        <h1 v-if="Boolean($route.params.slug)">{{ doc.title }}</h1>
        <NuxtContent :document="doc" />
      </article>

      <DocsEditOnGithub :document="doc" />

      <DocsArticlePrevNext :prev="prev" :next="next" class="lg:px-8 mt-4" />
    </div>

    <DocsArticleToc v-if="doc.toc && doc.toc.length" :toc="doc.toc" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Clipboard from 'clipboard'

import SeoHead from '~/components/mixins/SeoHead'
import { DocArticleContent } from '~/interfaces'

// TODO: improve this
type Doc = { [key: string]: string | boolean | number }

interface Data {
  doc: DocArticleContent
}

export default Vue.extend<Data, {}, {}>({
  name: 'DocsPageSlug',
  layout: 'docs',
  mixins: [SeoHead],
  middleware: 'docs-categories',
  async asyncData({ $content, app, params, error }) {
    const slug = params.slug || 'README'
    const { project } = params
    const contentArgs = [
      'docs',
      project,
      app.i18n.locale !== 'en' ? app.i18n.locale : '',
    ].filter(Boolean)
    let doc

    try {
      doc = await $content(...contentArgs, slug).fetch<Doc>()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content(...contentArgs)
      .only(['title', 'slug'])
      .sortBy('position', 'asc')
      .surround(slug, { before: 1, after: 1 })
      .fetch()

    return {
      doc,
      prev,
      next,
      head: {
        titleTemplate: '%s - Docs | Julio Marquez',
        title: doc.title,
        description: doc.description,
      },
    }
  },
  mounted() {
    const blocks = document.getElementsByClassName('nuxt-content-highlight')

    for (const block of blocks) {
      const pre = block.getElementsByTagName('pre')[0]
      const button = document.createElement('button')

      button.className = 'copy'
      button.textContent = 'Copy'

      pre.appendChild(button)
    }

    const copyCode = new Clipboard('.copy', {
      // @ts-ignore
      target(trigger) {
        return trigger.previousElementSibling
      },
    })

    copyCode.on('success', (event) => {
      event.clearSelection()

      event.trigger.textContent = 'Copied!'

      window.setTimeout(() => {
        event.trigger.textContent = 'Copy'
      }, 2000)
    })
  },
})
</script>
