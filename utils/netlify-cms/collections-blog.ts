import { CmsCollection } from 'netlify-cms-core'

export const blogPostsCollectionEn: CmsCollection = {
  name: 'posts_en',
  label: 'Posts (English)',
  label_singular: 'Post (English)',
  create: true,
  format: 'yaml-frontmatter',
  folder: 'content/blog/en',
  // @ts-ignore
  media_folder: '/assets/images/content/blog/',
  public_folder: 'blog/',
  editor: {
    preview: false,
  },
  preview_path: 'blog/{{fields.slug}}',
  slug: '{{fields.slug}}',
  sortableFields: ['title', 'created', 'published'],
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'string',
    },
    {
      label: 'Cover',
      name: 'cover',
      widget: 'image',
    },
    {
      label: 'Create at',
      name: 'created',
      widget: 'datetime',
    },
    {
      label: 'Published at',
      name: 'published',
      widget: 'datetime',
    },
    {
      label: 'Canonical',
      name: 'canonical',
      widget: 'string',
      required: false,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
    },
  ],
}

export const blogPostsCollectionEs = { ...blogPostsCollectionEn }
blogPostsCollectionEs.name = 'posts_es'
blogPostsCollectionEs.label = 'Posts (Español)'
blogPostsCollectionEs.label_singular = 'Post (Español)'
blogPostsCollectionEs.folder = 'content/blog/es'
blogPostsCollectionEs.preview_path = 'es/blog/{{fields.slug}}'
