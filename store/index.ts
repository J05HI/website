import Vue from 'vue'
import { ActionTree, MutationTree } from 'vuex'
import groupBy from 'lodash.groupby'

interface Category {
  category: string
  title: string
  slug: string
}

type Categories = { [key: string]: Category }

export const state = () => ({
  categories: {} as { [key: string]: Categories },
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_CATEGORIES(state, categories: Categories) {
    // @ts-ignore
    const { locale } = this.$i18n
    // @ts-ignore
    const { project } = this.$router.app.$route.params
    const index = `${locale}-${project}`

    // Vue Reactivity rules since we add a nested object
    // @ts-ignore
    Vue.set(state.categories, index, categories)
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchCategories({ commit }, options) {
    const project = options?.project || this.$router.app.$route.params.project

    if (!project) {
      return
    }

    // const index = `${this.$i18n.locale}-${project}`

    // TODO: enable this?
    // Avoid re-fetching in production
    // @ts-ignore
    // if (process.dev === false && state.categories[index]) {
    //   return
    // }

    const contentArgs = [
      'docs',
      project,
      this.$i18n.locale !== 'en' ? this.$i18n.locale : '',
    ].filter(Boolean)

    // @ts-ignore
    const docs: Category[] = await this.$content(...contentArgs)
      .only(['category', 'title', 'slug'])
      .sortBy('position', 'asc')
      .fetch<Category[]>()

    const categories = groupBy(docs, 'category')

    commit('SET_CATEGORIES', categories)
  },
}
