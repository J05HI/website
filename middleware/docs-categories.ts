import { Middleware } from '@nuxt/types'

const docsCategires: Middleware = async function ({
  store,
  app,
  params,
  redirect,
}) {
  const slug = `${params.slug}`.toLowerCase()
  const { project } = params

  if (slug === 'index' || slug === 'readme') {
    redirect('/')
  }

  if (process.server) {
    await store.dispatch('fetchCategories')
  }

  // Spa Fallback
  const index = `${app.i18n.locale}-${project}`
  if (process.client && !store.state.categories[index]) {
    await store.dispatch('fetchCategories')
  }

  // Hot reload on development
  // @ts-ignore
  if (process.client && process.dev) {
    // @ts-ignore
    window.onNuxtReady(() => {
      window.$nuxt.$on('content:update', () =>
        store.dispatch('fetchCategories')
      )
    })
  }
}

export default docsCategires
