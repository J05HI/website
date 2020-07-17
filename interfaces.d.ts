import { Node } from 'unist'

interface NuxtContentBase {
  toc: { id: string; depth: number; text: string }[]
  body: Node
  dir: string
  path: string
  extension: string
  updatedAt: Date
  text: string
  slug: string

  // extra
  readingTime?: number
}

export interface BlogPostIndex {
  slug: string
  title: string
  description: string
  published: Date
}

export interface BlogPostContent extends BlogPostIndex, NuxtContentBase {
  created: Date
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
  created: string
  published: string
  modified: string
  position: number
  category: string
}

export interface Project {
  id: string
  title: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  url: string
  category: 'open-source' | 'closed-source' | 'research'
  version?: string
}

export interface DocsProject extends Project {}
