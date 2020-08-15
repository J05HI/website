<template>
  <div class="flex flex-wrap-reverse">
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r"
      :class="{ '': doc.toc && doc.toc.length, 'lg:w-3/4': !doc.fullscreen }"
    >
      <article
        v-if="head && doc"
        itemscope
        itemtype="http://schema.org/TechArticle"
        class="prose prose-lg lg:px-8 dark:prose-dark-mode"
      >
        <meta itemprop="dateCreated" :content="head.createdAt" />
        <meta itemprop="datePublished" :content="head.publishedAt" />
        <meta itemprop="dateModified" :content="head.updatedAt" />
        <meta
          itemprop="headline"
          :content="`${doc.title} - ${currentProject.title[$i18n.locale]}`"
        />
        <meta itemprop="description" :content="doc.description" />
        <meta itemprop="inLanguage" :content="$i18n.locale" />
        <meta
          itemprop="mainEntityOfPage"
          :content="'https://marquez.co' + $route.path"
        />
        <meta itemprop="mainEntityOfPage" :content="head.canonical" />

        <div
          itemscope
          itemprop="image"
          itemtype="http://schema.org/ImageObject"
        >
          <meta
            itemprop="url"
            :content="
              'https://marquez.co' +
              require(`~/assets/images/projects/${currentProject.id}.png`)
            "
          />
          <meta itemprop="width" content="1200px" />
          <meta itemprop="height" content="630px" />
        </div>
        <meta itemprop="timeRequired" :content="`PT${doc.readingTime}M`" />

        <meta itemprop="version" :content="currentProject.version" />

        <div
          itemscope
          itemprop="author"
          itemtype="http://schema.org/Organization"
        >
          <meta itemprop="name" content="Julio Marquez" />
          <meta itemprop="url" content="https://marquez.co" />
        </div>
        <div
          itemscope
          itemprop="publisher"
          itemtype="http://schema.org/Organization"
        >
          <meta itemprop="name" content="Julio Márquez" />
          <meta itemprop="url" content="https://marquez.co" />
          <div
            itemscope
            itemprop="logo"
            itemtype="http://schema.org/ImageObject"
          >
            <meta
              itemprop="url"
              :content="
                'https://marquez.co' + require('~/assets/images/logotype.jpg')
              "
            />
            <meta itemprop="width" content="1200px" />
            <meta itemprop="height" content="630px" />
          </div>
        </div>

        <h1 v-if="Boolean($route.params.slug)">{{ doc.title }}</h1>
        <NuxtContent :document="doc" />
      </article>

      <aside>
        <DocsEditOnGithub
          v-if="currentProject.category === 'open-source'"
          :document="doc"
        />

        <DocsArticlePrevNext
          :prev="prev"
          :next="next"
          :class="{
            'pt-4 border-t dark:border-gray-800':
              currentProject.category !== 'open-source',
          }"
          class="lg:px-8 mt-4"
        />
      </aside>
    </div>

    <DocsArticleToc v-if="doc.toc && doc.toc.length" :toc="doc.toc" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Clipboard from 'clipboard'
import { RawLocation } from 'vue-router'

import SeoHead from '~/components/mixins/SeoHead'
import { docsProjects } from '~/data/projects'
import { DocArticleContent, Head } from '~/interfaces'

interface Data {
  doc: DocArticleContent
}

function toLink(
  project: string,
  localePath: (route: RawLocation, locale?: string) => string,
  slug?: string
): string {
  if (!slug || slug === 'index' || slug.toLowerCase() === 'readme') {
    return localePath({
      name: 'docs-project-slug',
      params: { project },
    })
  }

  return localePath({
    name: 'docs-project-slug',
    params: { slug, project },
  })
}

export default Vue.extend<Data, {}, {}>({
  name: 'DocsPageSlug',
  layout: 'docs',
  mixins: [SeoHead],
  // middleware: 'docs-categories',
  async asyncData({ $content, app, params, error }) {
    const getToLink = (slug?: string) => toLink(project, app.localePath, slug)

    const slug = params.slug || 'README'
    const { project } = params
    const locale = app.i18n.locale as string
    const contentArgs = ['docs', project, locale !== 'en' ? locale : ''].filter(
      Boolean
    )
    let doc

    try {
      doc = await $content(...contentArgs, slug).fetch<DocArticleContent>()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content(...contentArgs)
      .only(['title', 'slug'])
      .sortBy('position', 'asc')
      .surround(slug, { before: 1, after: 1 })
      .fetch()

    const currentProject = docsProjects.find((p) => p.id === project)
    const projectName = currentProject?.title[locale]

    const title = `${doc.title} - ${projectName} - Docs`
    const { description, createdAt, updatedAt, publishedAt } = doc
    const projectCanonical = `https://marquez.co${getToLink()}`
    const canonical = `https://marquez.co${getToLink(doc.slug)}`

    const breadcrumb = {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://marquez.co',
            name: app.i18n.t('links.home'),
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': `https://marquez.co${app.localePath('docs')}`,
            name: app.i18n.t('docs.title'),
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@id': projectCanonical,
            name: `${currentProject?.title[app.i18n.locale]} - Docs`,
          },
        },
      ],
    }

    if (slug !== 'README') {
      breadcrumb.itemListElement.push({
        '@type': 'ListItem',
        position: 4,
        item: {
          '@id': canonical,
          name: doc.title,
        },
      })
    }

    return {
      doc,
      prev,
      next,
      currentProject,
      head: {
        title,
        description,
        createdAt: new Date(createdAt).toISOString(),
        updatedAt: new Date(updatedAt).toISOString(),
        publishedAt: new Date(publishedAt).toISOString(),
        canonical,
        prev: prev ? `https://marquez.co${getToLink(prev.slug)}` : undefined,
        next: next ? `https://marquez.co${getToLink(next.slug)}` : undefined,
        extraScripts: [
          {
            innerHTML: JSON.stringify(breadcrumb),
            type: 'application/ld+json',
          },
        ],
      } as Head,
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

  middleware({ redirect, route, app, params }) {
    const slug = `${route.params.slug}`.toLowerCase()
    const { project } = params

    if (slug === 'index' || slug === 'readme') {
      redirect(
        app.localePath({
          name: 'docs-project-slug',
          params: { project },
        })
      )
    }
  },
})
</script>
