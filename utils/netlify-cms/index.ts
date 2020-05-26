import { nanoid } from 'nanoid'
import consola from 'consola'
import CMS from 'netlify-cms-app'
import { InitOptions } from 'netlify-cms-core'
// @ts-ignore
import { es } from 'netlify-cms-locales'

import {
  blogPostsCollectionEn,
  blogPostsCollectionEs,
} from './collections-blog'

export function getCMS(locale: string, isDev: boolean) {
  if (locale === 'es') {
    CMS.registerLocale('es', es)
  }

  //
  interface ImageComponent {
    id: string
    src: string
    width: string
    height: string
    alt: string
  }

  CMS.registerEditorComponent({
    // Internal id of the component
    id: 'blog-image',
    // Visible label
    label: 'Blog Image',
    // Fields the user need to fill out when adding an instance of the component
    fields: [
      { name: 'src', label: 'Source', widget: 'image' },
      { name: 'alt', label: 'Alt Text', widget: 'string' },
      // @ts-ignore
      { name: 'width', label: 'Width', widget: 'number', valueType: 'int' },
      // @ts-ignore
      { name: 'height', label: 'Height', widget: 'number', valueType: 'int' },
    ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^<blog-image src="(.*)" width="(\d+)" height="(\d+)" alt="(.*)"><\/blog-image>/,
    // Function to extract data elements from the regexp match
    fromBlock(match) {
      return {
        id: nanoid(),
        src: match[1],
        width: match[2],
        height: match[3],
        alt: match[4],
      }
    },
    // function to create a text block from an instance of this component
    // @ts-ignore
    toBlock(obj: ImageComponent) {
      return `<blog-image src="${obj.src}" width="${obj.width}" height="${obj.height}" alt="${obj.alt}"></blog-image>`
    },
    // preview output for this component
    // @ts-ignore
    toPreview(obj: ImageComponent) {
      return `<img src="${obj.src}" width="${obj.width}" height="${obj.height}" alt="${obj.alt}" />`
    },
  })

  // @ts-ignore
  CMS.registerEventListener({
    name: 'prePublish',
    // @ts-ignore
    handler: ({ author, entry }) =>
      consola.warn(JSON.stringify({ author, data: entry.get('data'), entry })),
  })

  // @ts-ignore
  CMS.registerEventListener({
    name: 'postPublish',
    // @ts-ignore
    handler: ({ author, entry }) =>
      consola.warn(JSON.stringify({ author, data: entry.get('data'), entry })),
  })

  // @ts-ignore
  CMS.registerEventListener({
    name: 'preUnpublish',
    // @ts-ignore
    handler: ({ author, entry }) =>
      consola.warn(JSON.stringify({ author, data: entry.get('data'), entry })),
  })

  // @ts-ignore
  CMS.registerEventListener({
    name: 'postUnpublish',
    // @ts-ignore
    handler: ({ author, entry }) =>
      consola.warn(JSON.stringify({ author, data: entry.get('data'), entry })),
  })

  const initOptions: InitOptions = {
    config: {
      logo_url: require('~/assets/images/logotype-netlify-cms.svg'),
      media_folder: 'assets/images/content',
      public_folder: 'content',
      publish_mode: 'editorial_workflow',
      // @ts-ignore
      load_config_file: false,
      locale,

      collections: [blogPostsCollectionEn, blogPostsCollectionEs],

      /* dev mode only */
      backend: {
        name: 'git-gateway',
      },
      // @ts-ignore
      local_backend: true,
    },
  }

  if (!isDev) {
    initOptions.config.backend = {
      name: 'github',
      repo: 'juliomrqz/website',
      branch: 'master',
      base_url: process.env.baseHost,
      auth_endpoint: '/api/cms/auth',
      site_domain: process.env.baseHost,
      // @ts-ignore
      squash_merges: true,
      commit_messages: {
        create:
          'feat(content): create {{collection}} “{{slug}}” by {{author-login}}({{author-name}})',
        update:
          'feat(content): update {{collection}} “{{slug}}” by {{author-login}}({{author-name}})',
        delete:
          'feat(content): delete {{collection}} “{{slug}}” by {{author-login}}({{author-name}})',
        uploadMedia:
          'feat(content): media upload “{{path}}” by {{author-login}}({{author-name}})',
        deleteMedia:
          'feat(content): media delete “{{path}}” by {{author-login}}({{author-name}})',
        openAuthoring: '{{message}} by {{author-login}}({{author-name}})',
      },
    }

    // @ts-ignore
    initOptions.config.local_backend = false
  }

  CMS.init(initOptions)

  return CMS
}
