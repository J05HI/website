import consola from 'consola'
import CMS from 'netlify-cms-app'
import { InitOptions } from 'netlify-cms-core'
// @ts-ignore
import { es } from 'netlify-cms-locales'

import {
  blogPostsCollectionEn,
  blogPostsCollectionEs,
  blogPostPreview,
} from './collections-blog'
import {
  blogImageEditorComponent,
  blogMathEquationEditorComponent,
} from './editor-components'

export function getCMS(locale: string, isDev: boolean) {
  if (locale === 'es') {
    CMS.registerLocale('es', es)
  }

  /* create editor components */
  CMS.registerEditorComponent(blogImageEditorComponent)
  CMS.registerEditorComponent(blogMathEquationEditorComponent)

  /* register event listeners */
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

  /* register previews templates */
  CMS.registerPreviewStyle(
    'https://cdn.jsdelivr.net/combine/npm/bootstrap@4/dist/css/bootstrap.min.css,npm/github-markdown-css@4'
  )
  CMS.registerPreviewTemplate('posts_en', blogPostPreview)
  CMS.registerPreviewTemplate('posts_es', blogPostPreview)

  /* define initialization options */
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

  // initialize the editor
  CMS.init(initOptions)

  return CMS
}
