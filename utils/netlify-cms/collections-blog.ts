import React from 'react'
import createClass from 'create-react-class'
import { CmsCollection, PreviewTemplateComponentProps } from 'netlify-cms-core'

const h = React.createElement

export const blogPostPreview = createClass<PreviewTemplateComponentProps>({
  render() {
    const props: PreviewTemplateComponentProps = this.props
    const entry = props.entry
    const cover = entry.getIn(['data', 'cover'])
    const coverImage = props.getAsset(cover)

    return h(
      'div',
      { className: 'p-3 mt-4 mr-4' },
      h(
        'h1',
        {
          className: 'mb-2',
        },
        entry.getIn(['data', 'title'])
      ),
      h(
        'div',
        { className: 'lead mb-2 mt-4' },
        entry.getIn(['data', 'description'])
      ),
      h(
        'div',
        {
          className: 'overflow-hidden inline-block shadow rounded-lg',
        },
        h('img', {
          className: 'img-fluid rounded-lg',
          src: coverImage.toString(),
        })
      ),
      h('div', { className: 'markdown-body mt-4' }, props.widgetFor('body'))
    )
  },
})

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
  preview_path: 'blog/{{fields.slug}}',
  slug: '{{fields.slug}}',
  sortableFields: ['title', 'createdAt', 'publishedAt'],
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
      name: 'createdAt',
      widget: 'datetime',
    },
    {
      label: 'Published at',
      name: 'publishedAt',
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
