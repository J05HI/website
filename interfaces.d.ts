import { VueI18n } from 'vue-i18n'
import { Node } from 'unist'
import { MetaInfo } from 'vue-meta'

interface NuxtContentBase {
  toc: { id: string; depth: number; text: string }[]
  body: Node
  dir: string
  path: string
  extension: string
  updatedAt: Date
  createdAt: Date
  text: string
  slug: string

  // extra
  readingTime?: number
}

export interface BlogPostIndex {
  slug: string
  title: string
  description: string
  publishedAt: Date
}

export interface BlogPostContent extends BlogPostIndex, NuxtContentBase {
  canonical?: string
  slug: string
  cover: string
  noindex?: boolean
}

export interface BlogPostParsed extends BlogPostContent {
  text: string
}

export interface NuxtRuntimeConfig {
  mainColor: string
  baseHost: string
  email: string
}

export interface DocArticleContent extends NuxtContentBase {
  title: string
  description: string
  publishedAt: string
  position: number
  category: string
}

export interface Project {
  id: string
  title: { [key: string]: string }
  description: {
    en: string
    es: string
  }
  url: string
  category: 'open-source' | 'closed-source' | 'research'
  version?: string
}

export interface DocsProject extends Project {}

export interface Head {
  extraScripts?: MetaInfo['script']

  image?: string

  title: string | VueI18n.TranslateResult
  description: string | VueI18n.TranslateResult

  updatedAt?: string
  publishedAt?: string

  noIndex?: boolean

  canonical?: string
  titleTemplate?: string

  prev?: string
  next?: string
}
